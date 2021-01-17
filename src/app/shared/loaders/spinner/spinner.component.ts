import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  styleUrls: ['./spinner.component.scss'],
  template: `
      <div class="spinner lds-spinner">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
  `
})
export class SpinnerComponent {
}
