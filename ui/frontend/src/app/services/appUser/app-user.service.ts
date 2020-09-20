import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  constructor(private http: HttpClient) { }

  public getUsersFromBackend(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/users`)
      .pipe(map(candidates => {
          return candidates;
        }), catchError((err, caught) => {
          return throwError(err);
        })
      );
  }
}
