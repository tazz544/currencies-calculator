import {DATE_FORMAT} from '../../shared/constants';
import {Currency} from '../../shared/enums';
import {Component, OnInit} from '@angular/core';
import {CurrenciesService} from '../../core/services/currencies.service';
import {finalize, map} from 'rxjs/operators';
import {BaseComponent} from '../../shared/components/base.component';
import * as moment from 'moment';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent extends BaseComponent implements OnInit {
  startAt = moment('2010-01-01').format(DATE_FORMAT);
  endAt = moment().format(DATE_FORMAT);

  destinationCurrency: Currency = Currency.EUR;
  sourceCurrency: Currency = Currency.PLN;

  multi: {
    name: string,
    series: {value: any; name: string}[]
  }[] = [];

  xAxisLabel = 'Date';
  yAxisLabel = 'Rate';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private currenciesService: CurrenciesService) {
    super();
  }

  ngOnInit(): void {
    this.load();
  }

  private load(): void {
    this.loading = true;
    this.subscription.add(
      this.currenciesService.fetchCurrenciesHistoryRate({
          base: this.sourceCurrency,
          symbols: [this.destinationCurrency],
          start_at: this.startAt,
          end_at: this.endAt
        }
      ).pipe(
        finalize(() => this.loading = false),
        map(res => res.rates),
        map(res => Object.keys(res).map((k, i) => ({
          value: res[k][this.destinationCurrency],
          name: k
        }))),
        map(res => res.sort((a, b) => moment(a.name, DATE_FORMAT).toDate().valueOf() - moment(b.name, DATE_FORMAT).toDate().valueOf())),
        map(res => [{ name: this.sourceCurrency, series: res }])
      ).subscribe(res => this.multi = res)
    );
  }
}
