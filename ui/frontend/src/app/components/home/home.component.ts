import { Component } from '@angular/core';
import {first} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication";
import {Router} from "@angular/router";
import {Offer} from "../../models/offer";

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
  newOfferType: any;
  newOfferRooms: any;
  newOfferTitle: string;
  newOfferStreet: string;
  newOfferCity: string;
  newOfferRegion: string;
  newOfferPostalCode: string;
  newOfferCountry: string;
  newOfferDescription: string;
  ngOnInit(){
    this.myForm = new FormGroup({
      'name':new FormControl(null),
      'email':new FormControl(null,Validators.email)

    })
  }

  onOfferFormSubmit() {
    let newOffer: Offer = new Offer();
    newOffer.title = this.newOfferTitle;
    newOffer.type = this.newOfferType;
    newOffer.rooms = this.newOfferRooms;
    newOffer.address.street = this.newOfferStreet;
    newOffer.address.city = this.newOfferCity;
    newOffer.address.region = this.newOfferRegion;
    newOffer.address.postalCode = this.newOfferPostalCode;
    newOffer.address.country = this.newOfferCountry;
    newOffer.description = this.newOfferDescription;
    console.log(JSON.stringify(newOffer));
  }

  checkIfRoomIsChosen() {
    if(this.newOfferType == "Room"){
      return true;
    }
    else {return false}
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
