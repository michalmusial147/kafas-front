import { Injectable } from '@angular/core';
import {Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Offer} from "../../models/offer";
import {environment} from "../../../environments/environment";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  public candidates: Observable<Offer>;
  constructor(private http: HttpClient) { }

  public getOffersFromBackend(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/offers
    `)
      .pipe(map(candidates => {
          console.log(JSON.stringify(candidates));
          return candidates;
        }), catchError((err, caught) => {
          return throwError(err);
        })
      );
  }
  public addOfferOnBackend(offer: Offer): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/offers`, offer)
      .pipe(map(offer => {
          console.log(JSON.stringify(offer));
          return offer;
        }), catchError((err, caught) => {
          return throwError(err);
        })
      );
  }

}