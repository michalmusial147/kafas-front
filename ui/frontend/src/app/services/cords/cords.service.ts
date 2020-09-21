import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CordsService {
  constructor(private http: HttpClient) {}

  public getCords(street: string, city: string ): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/cords?city=${street}&street=${city}`)
      .pipe(map(ans => {
        let a = ans.results
        console.log(JSON.stringify(a[0].geometry.location));
        return {
          lat : a[0].geometry.location.lat,
          lng : a[0].geometry.location.lng
        };
        }), catchError((err, caught) => {
          return throwError(err);
        })
      );
  }

}
// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,
//   +Mountain+View,+CA&key=YOUR_API_KEY
//
// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,
//   +Mountain+View,+CA
