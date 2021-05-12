import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {

  constructor(
    private basicAuthenticationService : BasicAuthenticationService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    //let basicAuthHeaderString=this.createBasicAuthenticationHeader();
    //let basicAuthHeaderString = this.basicAuthenticationService.getAuthenticatedToken();
    let jwtToken = this.basicAuthenticationService.getAuthenticatedToken();
    let username = this.basicAuthenticationService.getAuthenticatedUser();
    if(jwtToken && username) { 
     req=req.clone({
       setHeaders:{
       Authorization: jwtToken
       }
     });
  }
    return next.handle(req);
  }

  createBasicAuthenticationHeader(){
    let username="shaker";
    let password="123";
    let basicAuthHeaderString="Basic "+window.btoa(username+':'+password);
    return basicAuthHeaderString;
  }
}
