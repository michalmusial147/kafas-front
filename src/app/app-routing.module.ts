import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, Router} from '@angular/router';
import {ScreenTypeServiceService} from './services/screen-type-service/screen-type-service.service';
import {DashboardComponent} from './screens/dashboard/dashboard.component';
import {ProductsViewComponent} from './screens/products-list-view/products-view.component';
import {ProductDetailsComponent} from './screens/product-details/product-details.component';
import {CartViewComponent} from './screens/cart-view/cart-view.component';
import {AccountComponent} from './screens/account/account.component';
import {UserRegisterAccountComponent} from './screens/user-register-account/user-register-account.component';
import {AdminPanelComponent} from './screens/admin-panel/admin-panel.component';
import {AdminPanelLoginComponent} from './screens/admin-panel-login/admin-panel-login.component';
import {ProductsManagerComponent} from './components/products-manager/products-manager.component';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {AdminAuthGuard} from "./security/admin.auth.guard";
import {CashDeskComponent} from "./screens/cash-desk/cash-desk.component";

const desktopRoutes: Routes = [
  {
    path: '', component: DashboardComponent , pathMatch: 'full'
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
  },
  {
    path: 'adminPanel/login/cfb7ea2d-5846-441a-905f-9a6ba8146f47', component: AdminPanelLoginComponent
  },
  {
    path: 'adminPanel', component: AdminPanelComponent, canActivate: [AdminAuthGuard],
  },
  {
    path: 'cashDesk', component: CashDeskComponent
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
