import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {HomePageComponent} from '../home-page.component';


@Component({
  selector: 'app-home-page-mobile',
  templateUrl: './home-page-mobile.component.html',
  styleUrls: ['./home-page-mobile.component.styl']
})
export class HomePageMobileComponent extends HomePageComponent {
  constructor(router: Router,
              sanitizer: DomSanitizer) {
    super(router, sanitizer);
  }
}
