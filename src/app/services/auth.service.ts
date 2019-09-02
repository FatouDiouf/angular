  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Auth } from '../modeles/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = "http://localhost:8000/api/register"
  private _loginUrl = "http://localhost:8000/api/login_check"
  constructor( private http: HttpClient) { }

  registerUser(user){
    let  headers= new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    
    return this.http.post<Auth[]>(this._registerUrl,user,{headers:headers})
  }
  loginUser(user: any){
    return this.http.post<any>(this._loginUrl,user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
  }
}
