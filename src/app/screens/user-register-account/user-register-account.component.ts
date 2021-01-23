import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register-account',
  templateUrl: './user-register-account.component.html',
  styleUrls: ['./user-register-account.component.styl']
})
export class UserRegisterAccountComponent implements OnInit {
  email;
  userEmail: any;
  userPassword: any;
  userPasswordRepeat: any;
  public passwordFlag = false;
  termsChecked: any;
  constructor() { }

  ngOnInit(): void {

  }

  comparePasswords() {
    this.passwordFlag = this.userPassword !== this.userPasswordRepeat;
  }

  registerAccount() {

  }
}
