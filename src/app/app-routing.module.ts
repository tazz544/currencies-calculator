import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WrapperComponent} from './shared/layout';

const routes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        data: {
          title: 'Home'
        },
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'carousel',
        data: {
          title: 'Carousel'
        },
        loadChildren: () => import('./modules/carousel/carousel.module').then(m => m.CarouselModule)
      },
      {
        path: 'statistics',
        data: {
          title: 'Statistics'
        },
        loadChildren: () => import('./modules/statistics/statistics.module').then(m => m.StatisticsModule)
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
