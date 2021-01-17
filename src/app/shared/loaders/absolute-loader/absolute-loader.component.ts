import {Component, Input} from '@angular/core';
import {fadeIn, fadeOut} from '../../animations';

@Component({
  selector: 'app-absolute-loader',
  styleUrls: ['./absolute-loader.component.scss'],
  animations: [fadeIn, fadeOut],
  template: `
    <div class="page-loader" *ngIf="show" @fadeIn @fadeOut>
      <app-spinner></app-spinner>
    </div>
  `
})
export class AbsoluteComponent {
  @Input() show = true;
}
