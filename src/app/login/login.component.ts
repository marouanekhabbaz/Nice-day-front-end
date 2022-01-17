import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private userService: UserService) { }

  title = 'Login';

  public user = new User("",'','','','');


  public login( ): void {


    console.log("clicked ================")
     console.log(this.user)


    let x =  JSON.stringify(this.user);

    console.log(x);
    this.userService.getWithEmailAndPswUser(x);

  }



}
