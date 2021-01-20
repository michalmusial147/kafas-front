import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {CartService} from '../../services/cart/cart.service';
import {CartItem} from '../../model/cart-item';
import {formatCurrency} from '../../model/formatCurrency';
import * as lodash from 'lodash';
import {Observable, of} from 'rxjs';
import {MatTable} from "@angular/material/table";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.styl']
})

export class CartViewComponent implements OnInit {
  public cartItems: Observable<CartItem[]> = of([]);
  public shoppingCartItems: CartItem[] = [];
  public totalAmount: Observable<number> = of(0);
  public shoppingTotalAmount = 0;
  displayedColumns: string[] = ['image', 'title', 'quantity', 'totalPrice', 'delete'];
  public formatCurrency: any = formatCurrency;
  @ViewChild(MatTable) table: MatTable<any>;
  constructor(public cartService: CartService,
              public productDetailsDomSanitizer: DomSanitizer) {}

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(( items ) => {
      this.shoppingCartItems = items;
    });
    this.totalAmount = this.cartService.getTotalAmount();
    this.totalAmount.subscribe((newAmount) =>{
      this.shoppingTotalAmount = newAmount;
    })
  }
  removeProductFromCart(element: CartItem) {
    this.cartService.removeFromCart(element);
    this.table.renderRows();
  }
  // Increase Product Quantity
  public increment(product: any) {
    this.cartService.updateCartQuantity(product, 1);
    this.totalAmount.subscribe((newAmount) =>{
      this.shoppingTotalAmount = newAmount;
    })
  }

  // Decrease Product Quantity
  public decrement(product: any) {
    this.cartService.updateCartQuantity(product, -1);
    this.totalAmount.subscribe((newAmount) =>{
      this.shoppingTotalAmount = newAmount;
    })
  }

  getTotalCost() {

  }
}
