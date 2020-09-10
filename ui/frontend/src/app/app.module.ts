import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home";
import {LoginComponent} from "./components/login";
import {ErrorInterceptor} from "./helpers";
import {AppRoutingModule} from "./app-routing.module";
import {JwtInterceptor} from "./helpers/jwt.interceptor";


@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend uncomment to use it, remember to change api url in environment.ts
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
