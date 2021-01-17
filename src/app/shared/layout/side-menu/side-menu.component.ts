import {Component} from '@angular/core';
import {IMenu} from '../../interfaces';
import {MENU} from '../../constants';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  menu: IMenu = MENU;

  constructor() {
  }
}
