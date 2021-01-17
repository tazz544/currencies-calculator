import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {mergeMap} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()
export class DelayInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const delayValue = environment.production ? 0 : 800;
    return timer(delayValue).pipe(mergeMap(() => next.handle(request)));
  }
}
