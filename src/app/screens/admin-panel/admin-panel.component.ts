import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication';
import {Router} from '@angular/router';
import {User} from "../../model/user";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.styl']
})
export class AdminPanelComponent implements OnInit {
  navItems = [
    {
      id:'home',
      topText: 'Strona domowa',
      bottomText: 'Podgląd ogólny',
      path: 'adminPanel/dashboard'
    },
    {
      id:'products',
      topText: 'Produkty',
      bottomText: 'Zarządzaj produktami w sklepie',
      path: 'adminPanel/productsManager'
    },
    {
      id:'orders',
      topText: 'Zamówienia',
      bottomText: 'Zobacz aktualne zamówienia  ze sklepu',
    },
    {
      id: 'renovation',
      topText: 'Remonty',
      bottomText: 'Przeglądaj zamówienia remontów',
    },
  ]
  selectedOption: any;
  public currentLoggedUser: User;

  constructor(public router: Router,public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.currentLoggedUser = this.authenticationService.currentUserValue;
  }

  login() {

  }


  logout() {
    this.authenticationService.logout();
    this.currentLoggedUser = this.authenticationService.currentUserValue;
    this.router.navigate(['adminPanel/login/cfb7ea2d-5846-441a-905f-9a6ba8146f47']);
  }
}
