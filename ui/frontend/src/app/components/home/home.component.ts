import { Component } from '@angular/core';
import {catchError, first, map} from "rxjs/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication";
import {Router} from "@angular/router";
import {Offer} from "../../models/offer";
import {OffersService} from "../../services/offers/offers.service";
import {of, throwError} from "rxjs";
import { DomSanitizer } from '@angular/platform-browser';
import {User} from "../../models/user";
import {AppUserService} from "../../services/appUser/app-user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loading = false;

  constructor( public authenticationService: AuthenticationService, private router: Router, private offersService: OffersService,
               public sanitizer: DomSanitizer, private userService: AppUserService) { }
  offers: Offer[];
  users: User[];
  currentClickerOffer: Offer = null;
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
  newOfferPrice: string;
  isEditClicked: boolean;
  sortingType: any = "Newest";
  newOfferUserId: number;
  sortingTypes = [
    {name : "Newest",
     key: "newest"},
    {name : "Oldest",
      key: "oldest"},
    {name : "Low price",
      key: "low_price"},
    {name : "High price",
      key: "high_price"}
  ]
  searchDestinationName: any;
  searchCheckInDate: any;
  searchCheckOutDate: any;
  searchRooms: any;
  searchAdults: any;
  searchChildren: any;
  ngOnInit(){
    this.myForm = new FormGroup({
      'name':new FormControl(null),
      'email':new FormControl(null,Validators.email)
    })
    console.log(JSON.stringify(this.authenticationService.currentUserValue.roles));
    this.getNewestOffersFromBackEnd();
    this.getUsers();
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
    newOffer.price = this.newOfferPrice;
    if(this.isEditClicked){
      newOffer.id = this.currentClickerOffer.id;
      this.offersService.putOfferOnBackend(newOffer)
        .pipe(map(data => {
            this.getNewestOffersFromBackEnd();
          }), catchError((err, caught) => {
            return throwError(err);
          })
        ).subscribe();

    }else{
      newOffer.datePosted = new Date();
      this.offersService.addOfferOnBackend(newOffer)
        .pipe(map(data => {
            this.getNewestOffersFromBackEnd();
          }), catchError((err, caught) => {
            return throwError(err);
          })
        ).subscribe();
    }

  }
  getNewestOffersFromBackEnd(){
    this.offersService.getOffersFromBackend("newest")
      .pipe(map(data => {
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

  openImgFile(event) {

    const input = event.target;

    var reader = new FileReader();

    reader.onload = () => {
      let data = reader.result;

      this.newOfferPhoto = data.toString();
      return;
    };
    reader.readAsDataURL(input.files[0]);
  }

  showDetails(offer: Offer) {
    this.currentClickerOffer = offer;
  }

  editOffer() {
    this.isEditClicked = true;
    this.newOfferTitle = this.currentClickerOffer.title;
    this.newOfferType = this.currentClickerOffer.type;
    this.newOfferRooms = this.currentClickerOffer.rooms;
    this.newOfferStreet = this.currentClickerOffer.street;
    this.newOfferCity = this.currentClickerOffer.city;
    this.newOfferRegion = this.currentClickerOffer.region;
    this.newOfferPostalCode = this.currentClickerOffer.postalCode;
    this.newOfferCountry  = this.currentClickerOffer.country;
    this.newOfferDescription = this.currentClickerOffer.description;
    this.newOfferPhoto = this.currentClickerOffer.photo;
    this.newOfferPrice =  this.currentClickerOffer.price;
    this.newOfferUserId= this.currentClickerOffer.userId;
  }

  addOffer() {
    //just clear form
    this.isEditClicked = false;
    this.newOfferTitle = "";
    this.newOfferType = "";
    this.newOfferRooms = "";
    this.newOfferStreet = "";
    this.newOfferCity = ""
    this.newOfferRegion = "";
    this.newOfferPostalCode = "";
    this.newOfferCountry  = "";
    this.newOfferDescription = "";
    this.newOfferPhoto = "";
    this.newOfferPrice =  "";
    this.newOfferUserId = null;
  }
  getSortinType(){
    let param;
    if(this.sortingType == "Newest"){
      param = "newest";
    }
    else if(this.sortingType == "Oldest"){
      param = "oldest";
    }
    else if(this.sortingType == "Low price"){
      param = "low_price";
    }
    else if(this.sortingType == "High price"){
      param = "high_price";
    }
     return param;
  }
  sortingTypeChanged() {
    this.getOffersFromBackEndWithParam(this.getSortinType());
  }

  deleteOffer(id: number) {
    this.offersService.deleteById(id)
      .pipe(map(data => {
        this.getNewestOffersFromBackEnd();
        }), catchError((err, caught) => {
          return throwError(err);
        })
      ).subscribe();

  }

  private getOffersFromBackEndWithParam(sortparam: string) {
    this.offersService.getOffersFromBackend(sortparam)
      .pipe(map(data => {
          this.offers = data;
          return data;
        }), catchError((err, caught) => {
          return throwError(err);
        })
      ).subscribe();
  }

  searchForOffers() {
    this.offersService.getSearchOffersFromBackend(this.searchDestinationName, this.searchCheckInDate, this.searchCheckOutDate, this.searchRooms,
      this.searchAdults,this.searchChildren, this.getSortinType())
      .pipe(map(data => {
          this.offers = data;
          return data;
        }), catchError((err, caught) => {
          return throwError(err);
        })
      ).subscribe();
  }

  private getUsers() {
    this.userService.getUsersFromBackend()
      .pipe(map(data => {
          this.users = data;
          return data;
        }), catchError((err, caught) => {
          return throwError(err);
        })
      ).subscribe();
  }

  calculateOffers() {
    let filt
    if(this.offers!=null) {
     filt = this.offers.filter(x => this.isToday(x.datePosted))
      return filt.length;
    }
   else{return 0;}
  }

   isToday = (someDate0) => {
    console.log(someDate0)
    const today = new Date()
     let realDateObject = new Date(someDate0);
    return realDateObject.getDate() == today.getDate() &&
      realDateObject.getMonth() == today.getMonth() &&
      realDateObject.getFullYear() == today.getFullYear()
  }

  checkIfUserIsAdmin() {
    if(this.authenticationService.currentUserValue.roles.includes("ROLE_ADMIN")){
      return true
    }
    else{
      return false;
    }

  }
}
