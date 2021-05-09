import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }

  authenticate(username:string,password:string){
    if(username==="shaker" && password==="dummy"){
      sessionStorage.setItem("authenticatorUser",username);
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn():boolean{
    let user=sessionStorage.getItem("authenticatorUser");
    return (user!==null);
  }

  loggout():void{
    sessionStorage.removeItem("authenticatorUser");
  }
}
