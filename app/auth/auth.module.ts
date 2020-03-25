import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutes } from './auth.routing';
import { LoginComponent } from './components/login/login.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutes,
  ],
  declarations: [LoginComponent, NavigateComponent, RegisterComponent]
})
export class AuthModule { }