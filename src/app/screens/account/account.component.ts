import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication';
import {User} from '../../model/user';
import {MatDialog} from '@angular/material/dialog';
import {CartService} from '../../services/cart/cart.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.styl']
})
export class AccountComponent implements OnInit {
  checked = false;
  userEmailLoginForm: any;
  userPasswordLoginForm: any;
  currentLoggedUser: User;
  constructor(public router: Router,
              public authenticationService: AuthenticationService,
              public dialog: MatDialog,
              public cartService: CartService) { }

  ngOnInit(): void {
    this.currentLoggedUser = this.authenticationService.currentUserValue;
  }

  navigateToRegisterPage() {
    this.router.navigate(['/account/register']);
  }

  login() {
    this.authenticationService.login(this.userEmailLoginForm, this.userPasswordLoginForm).subscribe(()=>{
      this.router.navigate(['/']);
    });
  }

  logout() {
    this.authenticationService.logout();
    this.currentLoggedUser = this.authenticationService.currentUserValue;
    this.cartService.clearCart();
  }

}
