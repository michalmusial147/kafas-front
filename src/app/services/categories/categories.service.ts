import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Product} from '../../model/product';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(public httpClient: HttpClient) { }

  public getCategoriesFromBackend(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:8080/offers/categories').pipe(map(categorie =>{
      return categorie
      }),
      catchError((err, caught) => {
        return throwError(err);
      })
    );
  }
}
