﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home";
import {LoginComponent} from "./components/login";
import {ErrorInterceptor} from "./helpers";
import {AppRoutingModule} from "./app-routing.module";
import {JwtInterceptor} from "./helpers/jwt.interceptor";
import {} from 'googlemaps';
import { AlertModule } from 'bootstrap';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
