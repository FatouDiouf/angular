import { Component, OnInit } from '@angular/core';
import {User} from '../modeles/user';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  users:User[];
  constructor( private userService: UserService) { }

  ngOnInit() {
    
      this.userService.getpart().subscribe(
        res =>{
          this.users=res;
          console.log(res);
        },
        err => {
          console.log(err)
        }
      )
    
  }
 
}
