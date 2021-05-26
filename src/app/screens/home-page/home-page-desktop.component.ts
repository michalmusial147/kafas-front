import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
import {DictionaryService} from '../../services/dictionary/dictionary.service';
import {ComponentPortal} from '@angular/cdk/portal';
import {Overlay} from '@angular/cdk/overlay';
import {AuthenticationService} from '../../services/authentication';
import {CategoriesService} from '../../services/categories/categories.service';

@Component({
  selector: 'app-home-page-desktop',
  templateUrl: './home-page-desktop.component.html',
  styleUrls: ['./home-page-desktop.component.styl']
})
export class HomePageDesktopComponent implements OnInit{
  public dictionary: DictionaryService;
  router: Router;
  categories: string[];
  public log: string[] = [];

  constructor(router: Router, sanitizer: DomSanitizer,
              dictionaryService: DictionaryService,
              private overlay: Overlay,
              public authenticationService: AuthenticationService,
              public categoriesService: CategoriesService) {
    this.dictionary = dictionaryService;
    this.router = router;
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  ngOnInit(): void {
    this.categoriesService.getCategoriesFromBackend().subscribe((values)=>{
      console.log(values)
      this.categories = values;
    })
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
  getName() {
    if( this.authenticationService.currentUserValue == null){
      return 'Konto';
    }
    else{
      return this.authenticationService.currentUserValue.firstName;
    }
  }

  isHomeActive() {
    return window.location.pathname === '/';
  }

  isCategoriesActive() {
    return window.location.pathname.includes('products');
  }

  isCartActive() {
    return window.location.pathname.includes( '/cart');
  }
  isAccountActive() {
    return window.location.pathname.includes( 'account');
  }
}
