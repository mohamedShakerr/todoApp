import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private hardeCodedeAuthentication:HardCodedAuthenticationService,private router:Router) { }

  ngOnInit(): void {
  }

  handleLogin():void{
    if(this.hardeCodedeAuthentication.authenticate("shaker","dummy")) {
      this.router.navigate(['welcome',this.username])
      //this.invalidLogin=false;
    }else{
      this.invalidLogin=true;
    }
  }
}
