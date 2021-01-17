import {Component} from '@angular/core';
import {ICurrencyCarouselInput} from '../../shared/interfaces';
import {Currency} from '../../shared/enums';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  currencies: ICurrencyCarouselInput[] = [
    {
      sourceCurrency: Currency.EUR,
      destinationCurrency: Currency.PLN
    },
    {
      sourceCurrency: Currency.USD,
      destinationCurrency: Currency.GBP
    },
    {
      sourceCurrency: Currency.CAD,
      destinationCurrency: Currency.CHF
    }
  ];

  constructor() {
  }
}
