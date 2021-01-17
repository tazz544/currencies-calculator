import {Component, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-base-component',
  template: ''
})
export class BaseComponent implements OnDestroy {
  subscription: Subscription = new Subscription();

  loading: boolean;
  pending: boolean;

  form: FormGroup;

  constructor() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
