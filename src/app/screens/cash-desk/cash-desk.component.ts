import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication';
import {CartService} from '../../services/cart/cart.service';
import {formatCurrency} from '../../model/formatCurrency';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';
import {OrderServiceService} from '../../services/order/order-service.service';
import {Order} from "../../model/order";
import {CartItemDTO} from "../../model/cartItemDTO";
import {CartItem} from "../../model/cart-item";

@Component({
  selector: 'app-cash-desk',
  templateUrl: './cash-desk.component.html',
  styleUrls: ['./cash-desk.component.styl']
})
export class CashDeskComponent implements OnInit {
  public currentLoggedUser: any;
  public cartItems: Observable<CartItem[]> = of([]);
  public shoppingCartItems: CartItem[] = [];
  public currencyFormatter = formatCurrency;
  public totalAmount: Observable<number>;
  public shoppingTotalAmount: any;
  public showSpinner: any = false;
  constructor(public authenticationService: AuthenticationService,
              public cartService: CartService,
              public router: Router,
              public orderService: OrderServiceService) { }

  ngOnInit(): void {
    this.currentLoggedUser = this.authenticationService.currentUserValue;
    this.cartItems = this.cartService.getItems();
    this.cartItems.subscribe(( items ) => {
      this.shoppingCartItems = items;
    });
    this.totalAmount = this.cartService.getTotalAmount();
    this.totalAmount.subscribe((newAmount) =>{
      this.shoppingTotalAmount = newAmount;
    })
  }

  placeOrder() {
    const cartItemsToSend: CartItemDTO[] = [];
    console.log(this.shoppingCartItems)
    this.shoppingCartItems.forEach((item)=>{
      const itemDTO: CartItemDTO  = new CartItemDTO();
      itemDTO.quantity = item.quantity;
      itemDTO.offerID = item.product.id;
      cartItemsToSend.push(itemDTO);
    });
    this.showSpinner = true;
    this.orderService.placeOrderOnBackend(cartItemsToSend, this.currentLoggedUser.id).subscribe(()=>{
      this.showSpinner = false;
      this.cartService.clearCart();
      this.router.navigate(['/']);
    });

  }
}
