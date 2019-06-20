import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '@app/_services';
import { OauthService } from '@app/oauth.service';

@Injectable({
  providedIn: 'root'
})
export class F5Guard implements CanActivate {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private oauthService: OauthService
) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser) {
        // authorised so return true
        return true;
    }
    if (this.oauthService.authtoken == null) {
        this.oauthService.getAuthorizationToken(this.oauthService.f5);
    }
    return false;
}
}

