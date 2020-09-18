import { Component } from '@angular/core';
import {catchError, first, map} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication";
import {Router} from "@angular/router";
import {Offer} from "../../models/offer";
import {OffersService} from "../../services/offers/offers.service";
import {throwError} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading = false;

  constructor( private authenticationService: AuthenticationService, private router: Router, private offersService: OffersService) { }
  offers: Offer[];
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
    this.offersService.getCandidatesFromBackend()
      .pipe(map(data => {
          console.log(JSON.stringify(data));
          this.offers = data;
          return data;
        }), catchError((err, caught) => {
          return throwError(err);
        })
      ).subscribe();
  }

  onOfferFormSubmit() {
    let newOffer: Offer = new Offer();
    newOffer.title = this.newOfferTitle;
    newOffer.type = this.newOfferType;
    newOffer.rooms = this.newOfferRooms;
    newOffer.street = this.newOfferStreet;
    newOffer.city = this.newOfferCity;
    newOffer.region = this.newOfferRegion;
    newOffer.postalCode = this.newOfferPostalCode;
    newOffer.country = this.newOfferCountry;
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
