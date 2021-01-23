import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, Router} from '@angular/router';
import {ScreenTypeServiceService} from './services/screen-type-service/screen-type-service.service';
import {DashboardComponent} from './screens/dashboard/dashboard.component';
import {ProductsViewComponent} from './screens/products-list-view/products-view.component';
import {ProductDetailsComponent} from './screens/product-details/product-details.component';
import {CartViewComponent} from './screens/cart-view/cart-view.component';
import {AccountComponent} from "./screens/account/account.component";
import {UserRegisterAccountComponent} from "./screens/user-register-account/user-register-account.component";

const desktopRoutes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'products', component: ProductsViewComponent
  },
  {
    path: 'products/:id', component: ProductDetailsComponent
  },
  {
    path: 'cart', component: CartViewComponent
  },
  {
    path: 'account', component: AccountComponent
  },
  {
    path: 'account/register', component: UserRegisterAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(desktopRoutes , {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  public constructor(private router: Router, private applicationStateService: ScreenTypeServiceService) {

  }
}
