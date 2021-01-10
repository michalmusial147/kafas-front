import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, Router} from '@angular/router';
import {ScreenTypeServiceService} from './services/screen-type-service/screen-type-service.service';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductsViewComponent} from './products-view/products-view.component';

const desktopRoutes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'products', component: ProductsViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(desktopRoutes , {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public constructor(private router: Router, private applicationStateService: ScreenTypeServiceService) {

  }
}
