import {Component} from '@angular/core';
import {Currency} from '../../shared/enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly Currency = Currency;

  constructor() {
  }
}
