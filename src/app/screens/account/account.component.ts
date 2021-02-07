import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
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
  public redirectTo;
  constructor(public router: Router,
              public authenticationService: AuthenticationService,
              public dialog: MatDialog,
              public cartService: CartService,
              public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentLoggedUser = this.authenticationService.currentUserValue;
     this.redirectTo = this.route.snapshot.paramMap.get('redirectTo');
  }

  navigateToRegisterPage() {
    if(this.redirectTo){
      this.router.navigate(['/account/register',  { redirectTo: this.redirectTo }]);
    }
    else {
      this.router.navigate(['/account/register']);
    }
  }
  login() {
    this.authenticationService.login(this.userEmailLoginForm, this.userPasswordLoginForm).subscribe(()=>{
      if(this.redirectTo){
        this.router.navigate(['/'.concat(this.redirectTo)]);
      }
     else{
        this.router.navigate(['/']);
      }
    });
  }

  logout() {
    this.authenticationService.logout();
    this.currentLoggedUser = this.authenticationService.currentUserValue;
    this.cartService.clearCart();
  }

}
