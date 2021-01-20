import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../../services/product/product-service.service';
import {MatDialog} from '@angular/material/dialog';
import {CartService} from '../../services/cart/cart.service';
import {Product} from '../../model/product';
import {DomSanitizer} from '@angular/platform-browser';
import { formatCurrency } from '../../model/formatCurrency';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.styl']
})
export class ProductDetailsComponent implements OnInit {
  formatCurrency: any = formatCurrency;
  public product: Product;
  productQuantity: number;
  showSpinner: any;
  constructor(private route: ActivatedRoute,
              public productsService: ProductService,
              public productDetailsDomSanitizer: DomSanitizer,
              public cartService: CartService) {
    this.showSpinner = true;
    this.route.params.subscribe(params => {
      const id = +params.id;
      this.productsService.getProduct(id).subscribe(product => this.product = product);
      this.showSpinner = false;
    });
  }

  ngOnInit(): void {
  }

  decrement() {

  }

  increment() {

  }

  addToCart(product: Product, counter: any) {
    console.log(JSON.stringify(product));
  }

  buyNow(product: Product, counter: any) {

  }

  addItemToCart(product: any, quantity: number) {
    console.log(quantity);
    this.cartService.addToCart(product, quantity);
  }

}
