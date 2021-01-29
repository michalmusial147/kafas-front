import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication';
import {Router} from '@angular/router';

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
    {
      id: 'gates',
      topText: 'Bramy',
      bottomText: 'Przeglądaj zamówienia bram',
    },
  ]
  selectedOption: any;

  constructor(public router: Router,public authenticationService: AuthenticationService) { }

  ngOnInit(): void {

  }

  login() {

  }


  onNavListNgModelChange($event: any) {
    this.router.navigate([$event[0].path]);
  }
}
