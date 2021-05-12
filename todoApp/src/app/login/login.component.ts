import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string="shaker";
  password:string='';
  errorMessage:string="Invalid Credential";
  invalidLogin:boolean=false;

  constructor(private basicAuthenticationService:BasicAuthenticationService,
    private hardcodedAuthenticationService: HardCodedAuthenticationService,
    private router:Router) { }

  ngOnInit(): void {
  }

  /*handleLogin():void{
    if(this.hardeCodedeAuthentication.authenticate("shaker","dummy")) {
      this.router.navigate(['welcome',this.username])
      //this.invalidLogin=false;
    }else{
      this.invalidLogin=true;
    }
  }*/
 /*handleBasicAuthLogin() {

    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data);
            this.router.navigate(['welcome', this.username]);
            this.invalidLogin = false;      
          },
          error => {
            console.log(error);
            this.invalidLogin = true;
          }
        )
  }
*/
  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
           // console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false      
          },
          error => {
           // console.log(error)
            this.invalidLogin = true
          }
        )
  }
  
}
