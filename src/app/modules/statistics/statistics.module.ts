import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatisticsComponent} from './statistics.component';
import {SharedModule} from '../../shared/shared.module';
import {StatisticsRoutingModule} from './statistics-routing.module';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StatisticsRoutingModule,
    NgxChartsModule
  ]
})
export class StatisticsModule {
}
