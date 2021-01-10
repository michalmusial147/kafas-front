import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {Product} from '../../model/product';
import { ProductService } from '../../services/product/product-service.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.styl']
})
export class ProductDialogComponent implements OnInit {

  public products: Product[] = [];
  public counter = 1;
  public variantImage: any = '';
  public selectedColor: any = '';
  public selectedSize: any = '';

  constructor(private router: Router,
              public productsService: ProductService,
              private cartService: CartService,
              public dialogRef: MatDialogRef<ProductDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public product: Product) { }

  ngOnInit() {
    this.productsService.getProducts().subscribe(product => this.products = product);

  }


  public addToCart(product: Product, quantity) {
    if (quantity === 0) { return false; }
    this.cartService.addToCart(product, parseInt(quantity));
  }

  public close(): void {
    this.dialogRef.close();
  }

  public increment() {
    this.counter += 1;
  }

  public decrement() {
    if (this.counter > 1) {
       this.counter -= 1;
    }
  }
   // Add to cart
   public buyNow() {
    this.router.navigate(['/home/product', this.product.id]);
    this.close();
  }
}
