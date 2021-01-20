import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {DictionaryService} from '../services/dictionary/dictionary.service';
import {ComponentPortal} from '@angular/cdk/portal';
import {Overlay} from '@angular/cdk/overlay';
@Component({
  selector: 'app-home-page-desktop',
  templateUrl: './home-page-desktop.component.html',
  styleUrls: ['./home-page-desktop.component.styl']
})
export class HomePageDesktopComponent{
  public dictionary: DictionaryService;
  router: Router;

  public log: string[] = [];
  isOpen = false;

  constructor(router: Router, sanitizer: DomSanitizer, dictionaryService: DictionaryService, private overlay: Overlay) {
    this.dictionary = dictionaryService;
    this.router = router;
  }
 open(){
   const overlayRef = this.overlay.create();
   const userProfilePortal = new ComponentPortal(HomePageDesktopComponent);
   overlayRef.attach(userProfilePortal);
 }

  navigateToHomePage() {
    this.router.navigate(['/']);
  }
  navigateToProducts() {
    this.router.navigate(['/products']);
  }
  navigateToCart() {
    this.router.navigate(['/cart']);
  }

  navigateToAccount() {
    this.router.navigate(['/account']);
  }
}
