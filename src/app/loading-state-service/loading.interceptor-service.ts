import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse, HttpEvent
} from '@angular/common/http';
import {delay, finalize} from 'rxjs/operators';
import {LoadingStateService} from './loading-state.service';
import {Observable} from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(public loadingService: LoadingStateService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercept');
    this.loadingService.setLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.loadingService.setLoading(false);
      })
    );
  }
}
