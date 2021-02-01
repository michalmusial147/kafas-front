import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from "../services/authentication";



@Injectable({ providedIn: 'root' })
export class AdminAuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUser = this.authenticationService.currentUserValue;
        if ( currentUser ) {
          if ( currentUser.roles.includes('ROLE_ADMIN') ) {
            return true;
          }
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/adminPanel/login/cfb7ea2d-5846-441a-905f-9a6ba8146f47'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
