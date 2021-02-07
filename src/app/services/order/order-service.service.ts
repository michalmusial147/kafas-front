import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {Product} from '../../model/product';
import {Order} from '../../model/order';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService{
  constructor(public httpClient: HttpClient, public snackBar: MatSnackBar) {}

  getOrderOnBackend() : Observable<any[]>  {
    return this.httpClient.get<any[]>('http://localhost:8080/orders').pipe(map(orders => {
        return orders;
      }), catchError((err, caught) => {
        return throwError(err);
      })
    );
  }
  placeOrderOnBackend(cartItemsDTOs: any, id: any) : Observable<Order>  {
    return this.httpClient.post<Order>('http://localhost:8080/orders/?userId='.concat(id), cartItemsDTOs).pipe(map(result => {
      status = 'success';
      this.snackBar.open('Zamówienie zostało złożone pomyślnie.', '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });
      return result;
      }), catchError((err, caught) => {
        return throwError(err);
      })
    );
  }
}
