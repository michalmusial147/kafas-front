import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RenovationsService {

  constructor(public httpClient: HttpClient) { }

  get() : Observable<any[]>  {
    return this.httpClient.get<any[]>('http://localhost:8080/renovation').pipe(map(orders => {
        return orders;
      }), catchError((err, caught) => {
        return throwError(err);
      })
    );
  }
}
