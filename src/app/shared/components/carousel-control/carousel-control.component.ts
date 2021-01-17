import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {BaseComponent} from '../base.component';
import {ICurrencyCarouselInput} from '../../interfaces';
import {interval, Subject, timer} from 'rxjs';
import {debounce, filter, tap} from 'rxjs/operators';
import {carouselAnimation, fadeLeftIn, fadeLeftOut, fadeRightIn, fadeRightOut} from '../../animations';
import {CurrencyRateComponent} from '..';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-carousel-control',
  templateUrl: './carousel-control.component.html',
  styleUrls: ['./carousel-control.component.scss'],
  animations: [fadeLeftIn, fadeLeftOut, fadeRightIn, fadeRightOut, carouselAnimation],
})
export class CarouselControlComponent extends BaseComponent implements OnInit {
  @ViewChild('rate') rate: CurrencyRateComponent;
  @ViewChild('carousel') carousel: ElementRef;
  @ViewChild('stage') stage: ElementRef;
  @Input() currencies: ICurrencyCarouselInput[];

  tabs: {index: number, imageUrl: string; currencies: ICurrencyCarouselInput}[] = [];

  isHovered: boolean;
  currentSlideIndex = 0;

  directionCounter = 0;
  progress = 0;

  private debouncer$ = new Subject<boolean>();

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.generateTabs();
    this.observeHover();
    this.startAutoNext();
  }

  next(): void {
    this.currentSlideIndex++;
    this.directionCounter++;
    if (this.currentSlideIndex + 1 > this.tabs.length) {
      this.currentSlideIndex = 0;
    }
    this.progress = 0;
  }

  prev(): void {
    this.currentSlideIndex--;
    this.directionCounter--;
    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.tabs.length - 1;
    }
    this.progress = 0;
  }

  private generateTabs(): void {
    setTimeout(() => {
      const dimensions = this.stage.nativeElement.getBoundingClientRect();
      this.tabs = this.currencies.map((currencies, i) => {
        // Index added to randomize images response:
        const imageUrl = `${environment.imagesApiPath}/${dimensions.width}/${dimensions.height + i}`;
        return {index: i, imageUrl, currencies};
      });
    });
  }

  private startAutoNext(): void {
    this.subscription.add(
      interval(10).pipe(
        filter(() => !this.isHovered),
        tap(() => {
          if (this.progress >= 100) {
            this.next();
          }
        })
      ).subscribe(() => this.progress += .1)
    );
  }

  private observeHover(): void {
    setTimeout(() => {
      this.carousel.nativeElement.addEventListener('mouseover', () => this.debouncer$.next(true));
      this.carousel.nativeElement.addEventListener('mouseleave', () => this.debouncer$.next(false));
    });
    this.subscription.add(
      this.debouncer$.pipe(
        debounce(state => {
          let debounceValue = 1000;
          if (state) {
            debounceValue = 0;
          }
          return timer(debounceValue);
        })).subscribe(state => this.isHovered = state)
    );
  }
}
