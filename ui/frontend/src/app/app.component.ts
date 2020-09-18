import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "./services/authentication";
import {User} from "./models/user";

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    currentUser: User;
    title: "election";
    constructor() {}

}
