import {IMenu} from '../interfaces';

export const MENU: IMenu = {
  items: [
    {
      icon: 'fas fa-home',
      label: 'Home',
      link: ['/']
    },
    {
      icon: 'fas fa-coins',
      label: 'Carousel',
      link: ['/carousel']
    },
    {
      icon: 'fas fa-chart-pie',
      label: 'Statistics',
      link: ['/statistics']
    },
  ]
};
