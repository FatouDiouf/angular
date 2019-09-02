import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 helper = new JwtHelperService();

  loginUserData = {}
  constructor( private _auth: AuthService, private router: Router) { }

  ngOnInit() {
  }
 
   loginUser(user){
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        localStorage.setItem('token', res.token);
       // console.log(localStorage);
        const decodedToken = this.helper.decodeToken(res.token);
       // console.log(decodedToken);
        localStorage.setItem('username', decodedToken.username);
        localStorage.setItem('roles', decodedToken.roles[0]);
        localStorage.setItem('expiration', decodedToken.exp);
       console.log(localStorage.getItem('roles'))
        if(localStorage.getItem('roles')=="ROLE_SUPERADMIN"){
          this.router.navigate(["/home"])
        }
        else if(localStorage.getItem('roles')=="ROLE_ADMINPART"){
          this.router.navigate(["/home1"])
        } else if(localStorage.getItem('roles')=="ROLE_USERSIMPLE"){
          this.router.navigate(["/home2"])
        }else if(localStorage.getItem('roles')=="ROLE_CAISSIER"){
          this.router.navigate(["/home3"])
        }
      },
      err => console.log(err)
    )
   }
 
}
