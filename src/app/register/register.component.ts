import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

   constructor(private userService: UserService) { }


  //constructor() { }


  title = 'Sign up';

  public user = new User("",'','','','');

  clientMessage ={message :""};




  public registerUserFromService( ): void {


    console.log("clicked ================")
     console.log(this.user)


    let x =  JSON.stringify(this.user);


    this.userService.registerUser(x )
      .subscribe(
        data => this.clientMessage.message = `Successfully inserted ${data.firstName}`,
        error => this.clientMessage.message = `Something went wrong. Error: ${error}`
      );

  }


}
