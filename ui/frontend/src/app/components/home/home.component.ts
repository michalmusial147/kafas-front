import { Component } from '@angular/core';
import {first} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading = false;

  constructor( private authenticationService: AuthenticationService, private router: Router) { }

  myForm:FormGroup;
  offerForm: any;
  offerType: any;
  rooms: any;
  ngOnInit(){
    this.myForm = new FormGroup({
      'name':new FormControl(null), //note, can have up to 3 Constructor Params: default value, validators, AsyncValidators
      'email':new FormControl(null,Validators.email)

    })
  }

  onOfferFormSubmit() {

  }

  checkIfRoomIsChosen() {
    if(this.offerType == "Room"){
      return true;
    }
    else {return false}
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
