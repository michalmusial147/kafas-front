import { Injectable } from '@angular/core';
import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import {Product} from "../../model/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppUserServiceService {

  constructor(public httpClient: HttpClient) { }

  public getUsersFromBackend(): Observable<Product[]> {
    // tslint:disable-next-line:no-shadowed-variable
    return this.httpClient.get<any[]>('http://localhost:8080/users').pipe( map(products => {
        return products;
      }), catchError((err, caught) => {
        return throwError(err);
      })
    );
  }
}
