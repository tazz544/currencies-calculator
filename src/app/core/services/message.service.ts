import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import {Message} from '../../shared/enums';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  config: MatSnackBarConfig = {
    duration: 5000
  };

  constructor(private snackBar: MatSnackBar) {
  }

  open(message: string, type: Message): void {
    this.snackBar.open(message, '', {...this.config, panelClass: type});
  }
}
