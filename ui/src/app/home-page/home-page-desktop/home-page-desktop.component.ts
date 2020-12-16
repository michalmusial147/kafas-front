import { Component, OnInit } from '@angular/core';
import {HomePageComponent} from "../home-page.component";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-home-page-desktop',
  templateUrl: './home-page-desktop.component.html',
  styleUrls: ['./home-page-desktop.component.styl']
})
export class HomePageDesktopComponent extends HomePageComponent{
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(router: Router,
              sanitizer: DomSanitizer) {
    super(router, sanitizer);
  }

  ngOnInit(): void {
  }

}
