import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Currency} from '../../enums';
import {CurrenciesService} from '../../../core/services/currencies.service';
import {BaseComponent} from '../base.component';
import {finalize, map} from 'rxjs/operators';
import {IRate} from '../../interfaces';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
  styleUrls: ['./currency-rate.component.scss']
})
export class CurrencyRateComponent extends BaseComponent implements OnChanges {
  @Input() sourceCurrency: Currency;
  @Input() destinationCurrency: Currency;

  sourceRate: IRate;
  destinationRate: IRate;

  constructor(private currenciesService: CurrenciesService) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.sourceRate = {
      value: 1,
      currency: this.sourceCurrency
    };
    this.destinationRate = {
      value: 0,
      currency: this.destinationCurrency
    };
    this.load();
  }

  load(): void {
    this.loading = true;
    this.subscription.add(
      this.currenciesService.fetchCurrenciesLatestRate({base: this.sourceCurrency, symbols: [this.destinationCurrency]})
        .pipe(
          finalize(() => this.loading = false),
          map(res => res.rates[this.destinationCurrency])
        ).subscribe(res => this.destinationRate.value = res)
    );
  }
}
