import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {formatCurrency} from "../../model/formatCurrency";
@Component({
  selector: 'app-order-view-dialog',
  templateUrl: './order-view-dialog.component.html',
  styleUrls: ['./order-view-dialog.component.styl']
})
export class OrderViewDialogComponent implements OnInit {
  public user: any;
  public order: any
  public products: any;
  public currencyFormatter: any = formatCurrency;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.order = this.data.order;
    this.user = this.data.user;
    this.products = this.data.products;
  }

  getProductName(item) {
    return this.products.find(el=> el.id === item.offerID).title;
  }

  getProductPrice(item: any) {
    return this.products.find(el=> el.id === item.offerID).price;
  }

  getTotalPrice() {
    let sum = 0;
    this.order.cartItems.forEach((item)=>{
      sum = sum + item.quantity * this.products.find((element)=> element.id === item.offerID).price;
    })
    return sum;
  }
}
