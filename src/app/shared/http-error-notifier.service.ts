import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// R -- Interceptor 1 -- R* --> HttpErrorNotifier --> R** --> API
//           |                        |                   <--

@Injectable()
export class HttpErrorNotifier implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const clone = request.clone({
      setHeaders: {
        'X-Custom-Header': 'Hey API deliver awesome results!'
      }
    });

    return next.handle(clone).pipe(
      catchError(err => {
        console.warn('HTTP: Error caught!');
        return throwError(err);
      })
    );
  }
}
