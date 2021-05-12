import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { BasicAuthenticationService } from './basic-authentication.service';
import { HardCodedAuthenticationService } from './hard-coded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router:Router,
    private basicAuthenticationService:BasicAuthenticationService,
    private hardCodedAuthentication:HardCodedAuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
      if(this.basicAuthenticationService.isUserLoggedIn()){
        return true;
      }
      this.router.navigate(["/login"]);
      return false;
  }
}
