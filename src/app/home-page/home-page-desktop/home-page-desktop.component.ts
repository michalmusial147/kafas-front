import {HomePageComponent} from '../home-page.component';
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {DictionaryService} from '../../services/dictionary/dictionary.service';
@Component({
  selector: 'app-home-page-desktop',
  templateUrl: './home-page-desktop.component.html',
  styleUrls: ['./home-page-desktop.component.styl']
})
export class HomePageDesktopComponent extends HomePageComponent {
  public dictionary: DictionaryService;
  router: Router;

  public log: string[] = [];
  constructor(router: Router, sanitizer: DomSanitizer, dictionaryService: DictionaryService) {
    super(router, sanitizer);
    this.dictionary = dictionaryService;
    this.router = router;
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
}
