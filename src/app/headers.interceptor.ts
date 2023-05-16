import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { JwtService } from './services/jwt.service';
import { Router } from '@angular/router';


@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private jwt: JwtService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKey = 'Bearer ' + this.jwt.token;
    request = request.clone({
      setHeaders: {
        'Authorization': apiKey,
      }
    })
    return next.handle(request).pipe(tap(() => { },
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(['AddUser']);
        }
      }));
  }
}