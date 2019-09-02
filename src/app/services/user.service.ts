import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../modeles/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listUserUrl:string = "http://127.0.0.1:8000/api/liste";
   

  constructor( private http: HttpClient) { }

  getpart():Observable<User[]>{

    let  headers= new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<any>(this.listUserUrl,{headers:headers})
  }
}
