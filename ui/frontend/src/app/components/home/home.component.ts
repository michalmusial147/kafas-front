import { Component } from '@angular/core';
import {catchError, first, map} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication";
import {Router} from "@angular/router";
import {Offer} from "../../models/offer";
import {OffersService} from "../../services/offers/offers.service";
import {of, throwError} from "rxjs";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading = false;

  constructor( public authenticationService: AuthenticationService, private router: Router, private offersService: OffersService,
               public sanitizer: DomSanitizer) { }
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
  newOfferPhoto: string = null;
  newOfferPrize: string;
  ngOnInit(){
    this.myForm = new FormGroup({
      'name':new FormControl(null),
      'email':new FormControl(null,Validators.email)

    })
    this.getFromBackEnd();
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
    newOffer.photo = this.newOfferPhoto;
    newOffer.appuser = this.authenticationService.currentUserValue;
    newOffer.prize = this.newOfferPrize;
    console.log(JSON.stringify(newOffer));
    this.offersService.addOfferOnBackend(newOffer)
      .pipe(map(data => {
        this.getFromBackEnd();
        }), catchError((err, caught) => {
          return throwError(err);
        })
      ).subscribe();
  }
  getFromBackEnd(){
    this.offersService.getOffersFromBackend()
      .pipe(map(data => {
          console.log(JSON.stringify(data));
          this.offers = data;
          return data;
        }), catchError((err, caught) => {
          return throwError(err);
        })
      ).subscribe();
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

  openCsvMapping(event) {

    const input = event.target;

    var reader = new FileReader();

    reader.onload = () => {
      let data = reader.result;

      console.log(data)
      this.newOfferPhoto = data.toString();
      return;
    };
    reader.readAsDataURL(input.files[0]);
  }

  showDetails(offer: Offer) {
    console.log(offer.description);
  }
}
