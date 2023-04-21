import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from './services/jwt.service';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private jwt: JwtService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiKey = 'Bearer ' + this.jwt.token;
    request = request.clone({
      setHeaders: {
        'Authorization': apiKey,
      }
    })
    return next.handle(request);
  }
}
