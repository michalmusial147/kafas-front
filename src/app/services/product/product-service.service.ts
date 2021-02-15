import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subscriber, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../model/product';
import {MatSnackBar} from '@angular/material/snack-bar';
import {catchError, map, timeout} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

const products = JSON.parse(localStorage.getItem('compareItem')) || [];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public currency = 'USD';
  public catalogMode = false;

  private _url = 'assets/data/';
  public url = 'assets/data/banners.json';

  public compareProducts: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  public observer: Subscriber<{}>;

  constructor(private httpClient: HttpClient, public snackBar: MatSnackBar) {
    // tslint:disable-next-line:no-shadowed-variable
    this.compareProducts.subscribe(products => products = products);
  }

  public getProductsFromBackend(): Observable<Product[]> {
    // tslint:disable-next-line:no-shadowed-variable
    return this.httpClient.get<Product[]>('http://localhost:8080/offers').pipe( map(products => {
       return products;
      }), catchError((err, caught) => {
        return throwError(err);
      })
    );
  }

  public banners(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }


  // Get Banners
  public getBanners() {
    return this.banners();
  }

  // Get Banners
  public getProducts(): Observable<Product[]> {
    return this.getProductsFromBackend();
  }


  // Get Products By Id
  public getProduct(id: number): Observable<Product> {
    return this.httpClient.get<Product>('http://localhost:8080/offers/'+id).pipe( map(products => {
        return products;
      }), catchError((err, caught) => {
        return throwError(err);
      })
    );
  }


  /*
---------------------------------------------
----------  Compare Product  ----------------
---------------------------------------------
*/

// Get Compare Products
  public getComapreProducts(): Observable<Product[]> {
    const itemsStream = new Observable(observer => {
      observer.next(products);
      observer.complete();
    });
    return itemsStream as Observable<Product[]>;
  }

// If item is aleready added In compare
  public hasProduct(product: Product): boolean {
    // tslint:disable-next-line:no-shadowed-variable
    const item = products.find(item => item.id === product.id);
    return item !== undefined;
  }

  // Get Products By Slug
  public getProductBySlug(slug: string): Observable<Product> {
    return this.getProductsFromBackend().pipe(map(items => {
      return items.find((item: any) => {
        return item.name.replace(' ', '-') === slug;
      });
    }));
  }

  // Add to compare
  public addToCompare(product: Product): Product | boolean {
    let message, status;
    let item: Product | boolean = false;
    if (this.hasProduct(product)) {
      // tslint:disable-next-line:no-shadowed-variable
      item = products.filter(item => item.id === product.id)[0];
      const index = products.indexOf(item);
      this.snackBar.open('The product  ' + product.title + ' already added to comparison list.', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

    } else {
      if (products.length < 4) {
        products.push(product);
      }
      message = 'The product ' + product.title + ' has been added to comparison list.';
      status = 'success';
      this.snackBar.open(message, '×', { panelClass: [status], verticalPosition: 'top', duration: 3000 });

    }
    localStorage.setItem('compareItem', JSON.stringify(products));
    return item;
  }

// Removed Product
  public removeFromCompare(product: Product) {
    if (product === undefined) { return; }
    const index = products.indexOf(product);
    products.splice(index, 1);
    localStorage.setItem('compareItem', JSON.stringify(products));
  }

  public addProductOnBackend(product: Product): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiUrl}/offers`, product)
      .pipe(map(offer => {
          return offer;
        }), catchError((err, caught) => {
          return throwError(err);
        })
      );
  }
  public addImageOnBackend(newOfferPhoto: File, id: any): Observable<any>{
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', newOfferPhoto, newOfferPhoto.name);

    return this.httpClient.post('http://localhost:8080/offerImages/?offerId='.concat(id), uploadImageData, { observe: 'response' })
      .pipe(map((response) => {
          if (response.status === 200) {
            console.log('Image uploaded successfully');
          } else {
            console.log('Image not uploaded successfully');
          }
        }
      ))
  }

}
