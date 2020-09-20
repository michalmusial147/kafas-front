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

  public getOffersFromBackend(sortparam: string): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/offers?sortBy=`+sortparam)
      .pipe(map(candidates => {
          return candidates;
        }), catchError((err, caught) => {
          return throwError(err);
        })
      );
  }
  public addOfferOnBackend(offer: Offer): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/offers`, offer)
      .pipe(map(offer => {
          return offer;
        }), catchError((err, caught) => {
          return throwError(err);
        })
      );
  }

  putOfferOnBackend(offer: Offer) {
    return this.http.put<any>(`${environment.apiUrl}/offers`, offer)
      .pipe(map(offer => {
          return offer;
        }), catchError((err, caught) => {
          return throwError(err);
        })
      );
  }

  deleteById(id: number) {
    return this.http.delete<any>(`${environment.apiUrl}/offers/`+id,)
      .pipe(map(offer => {
          return offer;
        }), catchError((err, caught) => {
          return throwError(err);
        })
      );
  }

  getSearchOffersFromBackend(searchDestinationName: any, searchCheckInDate: any, searchCheckOutDate: any,
                             searchRooms: any, searchAdults: any, searchChildren: any, sortparam: any): Observable<any>
  {
    return this.http.get<any>(`${environment.apiUrl}/offers?sortBy=${sortparam}&destination=${searchDestinationName}&rooms=${searchRooms}`)
      .pipe(map(offers => {
          return offers;
        }), catchError((err, caught) => {
          return throwError(err);
        })
      );
  }
}
