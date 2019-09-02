import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  imageUrl : string = "/assets/img/renommer.jpg";
  registerUserData = {
    imageName: File = null
  }
  constructor( private _auth: AuthService) { }

  ngOnInit() {
  }
  handleFileInput(file: FileList) {
    this.registerUserData.imageName = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.registerUserData.imageName);
  }
 registerUser(){
   this._auth.registerUser(this.registerUserData).subscribe(
     res => console.log(res),
     err => console.log(err)
   )
 }
}
