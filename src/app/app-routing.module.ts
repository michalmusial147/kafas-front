import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, Router} from '@angular/router';
import {HomePageDesktopComponent} from './home-page/home-page-desktop/home-page-desktop.component';
import {HomePageMobileComponent} from './home-page/home-page-mobile/home-page-mobile.component';
import {ScreenTypeServiceService} from './screen-type-service/screen-type-service.service';

const desktopRoutes: Routes = [
  {
    path: '', component: HomePageDesktopComponent
  },
];

const mobileRoutes: Routes = [
  {
    path: '', component: HomePageMobileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(desktopRoutes , {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public constructor(private router: Router, private applicationStateService: ScreenTypeServiceService) {

    if (applicationStateService.isScreenMobile === true) {
      router.resetConfig(mobileRoutes);
    }
  }
}
