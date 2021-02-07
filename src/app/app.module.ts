import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {HomePageDesktopComponent} from './home-page/home-page-desktop.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';
import { AppSearcherComponent } from './components/app-searcher/app-searcher.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import {MatTabsModule} from '@angular/material/tabs';
import { FooterComponent } from './components/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { ProductsViewComponent } from './screens/products-list-view/products-view.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import {OrderByPipe} from './pipes/order-by.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClientModule, HttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRippleModule} from '@angular/material/core';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ProductDetailsComponent } from './screens/product-details/product-details.component';
import { AppLoaderComponent } from './components/app-loader/app-loader.component';
import {LoadingInterceptor} from './loading-state-service/loading.interceptor-service';
import { CartViewComponent } from './screens/cart-view/cart-view.component';
import {MatTableModule} from '@angular/material/table';
import {OverlayModule} from '@angular/cdk/overlay';
import { AccountComponent } from './screens/account/account.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { UserRegisterAccountComponent } from './screens/user-register-account/user-register-account.component';
import { EmailExistsDialogComponent } from './components/email-exists-dialog/email-exists-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { AdminPanelComponent } from './screens/admin-panel/admin-panel.component';
import { AdminPanelLoginComponent } from './screens/admin-panel-login/admin-panel-login.component';
import { BadCredentialsDialogComponent } from './components/bad-credentials-dialog/bad-credentials-dialog.component';
import { ProductsManagerComponent } from './components/products-manager/products-manager.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminRenovationsComponent } from './components/admin-renovations/admin-renovations.component';
import { AdminGatesComponent } from './components/admin-gates/admin-gates.component';
import { AddProductDialogComponent } from './components/add-product-dialog/add-product-dialog.component';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import {BottomSheetComponent} from "./home-page/bottom-sheet-component";
import { CashDeskComponent } from './screens/cash-desk/cash-desk.component';
import {JwtInterceptor} from "./security/jwt.interceptor";
import { OrderViewDialogComponent } from './components/order-view-dialog/order-view-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageDesktopComponent,
    LanguageSelectorComponent,
    AppSearcherComponent,
    FooterComponent,
    DashboardComponent,
    ProductsViewComponent,
    BreadcrumbComponent,
    OrderByPipe,
    ProductDetailsComponent,
    AppLoaderComponent,
    CartViewComponent,
    AccountComponent,
    UserRegisterAccountComponent,
    EmailExistsDialogComponent,
    AdminPanelComponent,
    AdminPanelLoginComponent,
    BadCredentialsDialogComponent,
    ProductsManagerComponent,
    AdminDashboardComponent,
    AdminOrdersComponent,
    AdminRenovationsComponent,
    AdminGatesComponent,
    AddProductDialogComponent,
    BottomSheetComponent,
    CashDeskComponent,
    OrderViewDialogComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatInputModule,
        FormsModule,
        MatChipsModule,
        MatMenuModule,
        MatGridListModule,
        MatCarouselModule.forRoot(),
        MatTabsModule,
        FlexLayoutModule,
        NgxPaginationModule,
        HttpClientModule,
        MatSnackBarModule,
        MatRippleModule,
        MatBadgeModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatTableModule,
        OverlayModule,
        MatCheckboxModule,
        MatSelectModule,
    ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    {provide: MatDialogRef , useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {}},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
