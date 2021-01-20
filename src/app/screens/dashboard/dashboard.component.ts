import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {Orientation} from '@ngbmodule/material-carousel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.styl']
})
export class DashboardComponent implements OnInit {
  public slidesList = new Array<never>(5);
  public parentHeight = 'auto';
  public timings = '500ms ease-in';
  public autoplay = false;
  public interval = 4000;
  public loop = true;
  public hideArrows = true;
  public hideIndicators = false;
  public color: ThemePalette = 'primary';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 40;
  public slideHeight = '300px';
  public slides = this.slidesList.length;
  public overlayColor = '#00000000';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';

  constructor() { }

  ngOnInit(): void {
  }
  public onChange(index: number) {

  }
}
