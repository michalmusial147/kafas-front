import { Injectable } from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";


@Injectable({
  providedIn: 'root'
})
export class ScreenTypeServiceService {

  private _isScreenMobile : boolean = true;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset,
    ]).subscribe(result => {
      if (result.matches) {
        this.activateHandsetLayout();
      }
    });
    breakpointObserver.observe([
      Breakpoints.Web,
    ]).subscribe(result => {
      if (result.matches) {
        this.activateWebLayout();
      }
    });
  }

  private activateHandsetLayout() {
    this._isScreenMobile = true;
  }

  private activateWebLayout() {
    this._isScreenMobile = false;
  }
  get isScreenMobile(): boolean {
    return this._isScreenMobile;
  }
}
