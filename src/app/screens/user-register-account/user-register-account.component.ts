import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication";
import {User} from "../../model/user";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {EmailExistsDialogComponent} from "../../components/email-exists-dialog/email-exists-dialog.component";
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";

@Component({
  selector: 'app-user-register-account',
  templateUrl: './user-register-account.component.html',
  styleUrls: ['./user-register-account.component.styl']
})
export class UserRegisterAccountComponent implements OnInit {
  public passwordFlag = false;
  userEmail: any;
  userPassword: any;
  userPasswordRepeat: any;
  termsChecked: any;
  userFirstName: any;
  userLastName: any;
  userAddress1: any;
  userAddress2: any;
  userPostcode: any;
  userTelephone: any;
  userNewsletterChecked: boolean;
  constructor(public authenticationService: AuthenticationService,
              public router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  comparePasswords() {
    this.passwordFlag = this.userPassword !== this.userPasswordRepeat;
  }

  registerAccount() {
    const user = new User();
    user.username = this.userEmail.toLowerCase();
    user.firstName = this.userFirstName;
    user.lastName = this.userLastName;
    user.password = this.userPassword;
    user.address1 = this.userAddress1;
    user.address2 = this.userAddress2;
    user.postcode = this.userPostcode;
    user.telephone = this.userTelephone;
    user.newsLetterSubscriber = this.userNewsletterChecked;

    this.authenticationService.register(user).pipe(map(result => {
      this.router.navigate(['/']);
    }), catchError((err) => {
      this.openDialog();
      return throwError(err);
    })).subscribe();
  }
  openDialog() {
    this.dialog.open(EmailExistsDialogComponent, {
      hasBackdrop: true
    });
  }
}
