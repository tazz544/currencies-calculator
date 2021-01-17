import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {MessageService} from '../services/message.service';
import {environment} from '../../../environments/environment';
import {Message} from '../../shared/enums';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(public router: Router,
              private messageService: MessageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError(err => {

        // Log:
        if (!environment.production) {
          console.log(err);
        }

        this.messageService.open('Something went wrong 🤖', Message.Danger);

        return throwError(err);
      })
    );
  }
}
