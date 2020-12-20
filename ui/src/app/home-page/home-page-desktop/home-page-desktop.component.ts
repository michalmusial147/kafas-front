import { Component, OnInit } from '@angular/core';
import {HomePageComponent} from "../home-page.component";
import {Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";
import {FormControl} from "@angular/forms";
import {MatCarousel, MatCarouselComponent, Orientation} from '@ngbmodule/material-carousel';
import {ThemePalette} from "@angular/material/core";
@Component({
  selector: 'app-home-page-desktop',
  templateUrl: './home-page-desktop.component.html',
  styleUrls: ['./home-page-desktop.component.styl']
})
export class HomePageDesktopComponent extends HomePageComponent{
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  drawer: any;


  public slidesList = new Array<never>(5);
  public showContent = true;

  public parentHeight = 'auto';
  public timings = '500ms ease-in';
  public autoplay = false;
  public interval = 4000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'primary';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 20;
  public slideHeight = '200px';
  public slides = this.slidesList.length;
  public overlayColor = '#00000000';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';
  public log: string[] = [];
  constructor(router: Router,
              sanitizer: DomSanitizer) {
    super(router, sanitizer);
  }

  ngOnInit(): void {
  }
  public onChange(index: number) {
    this.log.push(`MatCarousel#change emitted with index ${index}`);
  }
}
