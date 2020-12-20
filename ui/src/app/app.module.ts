import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { HomePageMobileComponent } from './home-page/home-page-mobile/home-page-mobile.component';
import { HomePageDesktopComponent } from './home-page/home-page-desktop/home-page-desktop.component';
import { ToolbarMobileComponent } from './home-page/home-page-mobile/components/toolbar-mobile/toolbar-mobile.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import { MatChipsModule } from "@angular/material/chips";
import { MatMenuModule } from "@angular/material/menu";
import { LanguageSelector } from './components/language-selector/language-selector.component';
import { AppSearcherComponent } from './components/app-searcher/app-searcher.component';
import {MatGridListModule} from "@angular/material/grid-list";
import { MatCarouselModule } from '@ngbmodule/material-carousel';
@NgModule({
  declarations: [
    AppComponent,
    HomePageMobileComponent,
    HomePageDesktopComponent,
    ToolbarMobileComponent,
    LanguageSelector,
    AppSearcherComponent,
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
    BrowserModule,
    MatChipsModule,
    MatMenuModule,
    MatGridListModule,
    MatCarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
