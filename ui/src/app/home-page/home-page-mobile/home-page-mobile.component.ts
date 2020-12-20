import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {HomePageComponent} from "../home-page.component";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";

@Component({
  selector: 'app-home-page-mobile',
  templateUrl: './home-page-mobile.component.html',
  styleUrls: ['./home-page-mobile.component.styl']
})
export class HomePageMobileComponent extends HomePageComponent{
  showFiller: boolean;
  searchForResults: any;

  constructor(router: Router,
              sanitizer: DomSanitizer) {
    super(router, sanitizer);
  }

  ngOnInit(): void {
  }

}
