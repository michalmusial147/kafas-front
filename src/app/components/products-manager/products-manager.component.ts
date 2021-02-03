import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product/product-service.service';
import {Product} from '../../model/product';
import {DomSanitizer} from '@angular/platform-browser';
import {formatCurrency} from '../../model/formatCurrency';
import {EmailExistsDialogComponent} from '../email-exists-dialog/email-exists-dialog.component';
import {AddProductDialogComponent} from '../add-product-dialog/add-product-dialog.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-products-manager',
  templateUrl: './products-manager.component.html',
  styleUrls: ['./products-manager.component.styl']
})
export class ProductsManagerComponent implements OnInit {
  public showLoader = false;
  public page: any;
  displayedColumns: string[] = ['image', 'title', 'quantity', 'price', 'delete'];
  public products: Product[] = [];
  constructor(public productsService: ProductService,   public productDetailsDomSanitizer: DomSanitizer, public dialog: MatDialog) { }
  public formatCurrency: any = formatCurrency;
  ngOnInit(): void {
    this.showLoader = true;
    this.productsService.getProductsFromBackend().subscribe(products => {
      this.products = products;
      this.showLoader = false;
    });
  }
  removeProduct(element: any) {


  }
  openDialog() {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      hasBackdrop: true

    });
    dialogRef.afterClosed()
      .subscribe(() => {
        this.showLoader = true;
        this.productsService.getProductsFromBackend().subscribe(products => {
          this.products = products;
          this.showLoader = false;
        });
      })
  }
  public onPageChanged(event) {
    this.page = event;
    window.scrollTo(0, 0);
  }
}
