import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {AuthenticationService} from '../../services/authentication';
import {Router} from '@angular/router';
import {catchError, map} from "rxjs/operators";
import {throwError} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {EmailExistsDialogComponent} from "../../components/email-exists-dialog/email-exists-dialog.component";
import {BadCredentialsDialogComponent} from "../../components/bad-credentials-dialog/bad-credentials-dialog.component";

@Component({
  selector: 'app-admin-panel-login',
  templateUrl: './admin-panel-login.component.html',
  styleUrls: ['./admin-panel-login.component.styl']
})
export class AdminPanelLoginComponent implements OnInit {
  userEmailLoginForm: any;
  userPasswordLoginForm: any;

  constructor(public authenticationService: AuthenticationService, public router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  login() {
    this.authenticationService.login(this.userEmailLoginForm, this.userPasswordLoginForm).pipe(map(user => {
      if(user.roles.includes('ROLE_ADMIN')){
        this.router.navigate(['/adminPanel']);
      }
      else{
        this.openDialog();
      }
    }), catchError((err) => {
      this.openDialog();
      return throwError(err);
    })).subscribe();
  }

  private openDialog() {
    this.dialog.open(BadCredentialsDialogComponent, {
      hasBackdrop: true
    });
  }
}
