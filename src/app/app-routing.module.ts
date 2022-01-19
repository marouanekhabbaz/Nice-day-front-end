import { EditUserInfoComponent } from './edit-user-info/edit-user-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ErrorComponent} from './error/error.component';
import { EfterLoginComponent } from './efter-login/efter-login.component';

const routes: Routes = [
 {path : "", component: HomeComponent },
 {path : "login", component: LoginComponent},
 {path : "register", component: RegisterComponent},
 {path : "logedIn" , component:  EfterLoginComponent },
 {path : "edit", component: EditUserInfoComponent},
 {path : "**", component : ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
