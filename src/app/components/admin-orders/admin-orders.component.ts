import { Component, OnInit } from '@angular/core';
import {OrderServiceService} from '../../services/order/order-service.service';
import {AppUserServiceService} from '../../services/user/app-user-service.service';
import {ProductService} from '../../services/product/product-service.service';
import {formatCurrency} from '../../model/formatCurrency';
import {DomSanitizer} from "@angular/platform-browser";
import {MatDialog} from "@angular/material/dialog";
import {AddProductDialogComponent} from "../add-product-dialog/add-product-dialog.component";
import {OrderViewDialogComponent} from "../order-view-dialog/order-view-dialog.component";
@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.styl']
})
export class AdminOrdersComponent implements OnInit {
  public orders: any;
  public users: any;
  public products: any;
  public ordersFlag;
  public usersFlag;
  public productsFlag;
  public currencyFormatter = formatCurrency;
  constructor(public orderService: OrderServiceService,
              public userService: AppUserServiceService,
              public productService: ProductService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.ordersFlag = false;
    this.usersFlag = false;
    this.productsFlag = false;
    this.orderService.getOrderOnBackend().subscribe((orders)=>{
      console.log(orders);
      this.orders = orders;
      this.ordersFlag = true;
    });
    this.userService.getUsersFromBackend().subscribe((result)=>{
      this.users = result;
      this.usersFlag = true;
    });
    this.productService.getProducts().subscribe((result)=>{
      this.products = result;
      this.productsFlag = true;
    });
  }

  getUserNames(id) {
    const user = this.users.find((element)=> element.id === id);
    return user.firstName.concat(' ').concat(user.lastName);
  }

  getTotalPrice(id: any) {
    const order = this.orders.find((element)=> element.id === id);
    let sum = 0;
    order.cartItems.forEach((item)=>{
      sum = sum + item.quantity * this.products.find((element)=> element.id === item.offerID).price;
    })
    return sum;
  }

  showOrder(order) {
    this.openDialog(order);
  }

  getStatus(status: string) {
    if(status === 'accepted'){
      return 'Przyjęto do realizacji';
    }
    if(status === 'sent'){
      return 'Wysłano do klienta';
    }
    if(status === 'finalized'){
      return 'Dostarczono';
    }
  }

  openDialog(order: any) {
    const user = this.users.find(el => el.id === order.userID);
    const productsIds = [];
    order.cartItems.forEach(item=>productsIds.push(item.offerID));
    const products = this.products.filter(el => productsIds.includes(el.id));
    const dialogRef = this.dialog.open(OrderViewDialogComponent, {
      hasBackdrop: true,
      data: {order, user, products}
    });
    dialogRef.afterClosed().subscribe(() => {
        });
  }
}
