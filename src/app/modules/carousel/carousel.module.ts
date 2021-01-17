import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselComponent} from './carousel.component';
import {SharedModule} from '../../shared/shared.module';
import {CarouselRoutingModule} from './carousel-routing.module';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselRoutingModule
  ]
})
export class CarouselModule {
}
