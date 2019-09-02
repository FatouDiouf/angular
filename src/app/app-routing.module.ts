import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListUserComponent } from './list-user/list-user.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Home3Component } from './home3/home3.component';
import { CompteComponent } from './compte/compte.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'listuser', component: ListUserComponent},
  { path: 'home', component: HomeComponent},
  { path: 'home1', component: Home1Component},
  { path: 'home2', component: Home2Component},
  { path: 'home3', component: Home3Component},
  { path: 'compte', component: CompteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
