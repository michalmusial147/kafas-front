import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {CartItem} from '../../model/cart-item';
import {formatCurrency} from '../../model/formatCurrency';
import * as lodash from 'lodash';
import {Observable, of} from 'rxjs';
@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.styl']
})

export class CartViewComponent implements OnInit {
  public cartItems: Observable<CartItem[]> = of([]);
  public shoppingCartItems: CartItem[] = [];
  displayedColumns: string[] = ['title', 'quantity', 'totalPrice', 'delete'];
  public formatCurrency: any = formatCurrency;
  constructor(private cartService: CartService) {
  }
  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(( items ) => {
      this.shoppingCartItems = items;
      console.log(JSON.stringify(items.length));
    });

  }
  addOneMoreProduct(element: any) {
    this.cartService.addToCart(element.product, 1);
  }

  removeOneProduct(element: any) {

  }
  removeProductFromCart(element: CartItem) {
    this.cartService.removeFromCart(element);
  }
  // Increase Product Quantity
  public increment(product: any, quantity: number = 1) {
    this.cartService.updateCartQuantity(product, quantity);
  }

  // Decrease Product Quantity
  public decrement(product: any, quantity: number = -1) {
    this.cartService.updateCartQuantity(product, quantity);
  }

}
