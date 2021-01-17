import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ChildActivationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <ng-container>
      <router-outlet></router-outlet>
    </ng-container>
  `
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title,
              private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof ChildActivationEnd),
      filter((event: ChildActivationEnd) => event.snapshot.data && event.snapshot.data.title)
    ).subscribe(res => this.titleService.setTitle(`${environment.name} | ${res.snapshot.data.title}`));
  }
}
