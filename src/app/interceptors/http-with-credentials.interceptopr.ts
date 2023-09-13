import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class HttpWithCredentialsInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    req = req.clone({
        headers,
        withCredentials: true
    });

    return next.handle(req);
  }
}