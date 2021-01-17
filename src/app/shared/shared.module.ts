import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BaseComponent} from './components/base.component';
import {MatCardModule} from '@angular/material/card';

import * as Components from './components';
import * as Loaders from './loaders';
import * as Layout from './layout';

const coreModules = [
  CommonModule,
  RouterModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
];

const materialModules = [
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatInputModule,
  MatSnackBarModule,
  MatIconModule,
  MatTooltipModule,
  MatRippleModule,
  MatCardModule,
];

const components = [
  BaseComponent,
  Components.CurrencyRateComponent,
  Components.CarouselControlComponent,
];

const layout = [
  Layout.WrapperComponent,
  Layout.SideMenuComponent,
];

const loaders = [
  Loaders.AbsoluteComponent,
  Loaders.SpinnerComponent,
];

@NgModule({
  declarations: [
    ...components,
    ...layout,
    ...loaders,
  ],
  imports: [
    ...coreModules,
    ...materialModules,
  ],
  exports: [
    ...coreModules,
    ...materialModules,
    ...components,
    ...layout,
    ...loaders,
  ]
})
export class SharedModule {
}
