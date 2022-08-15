import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';

import { LoginComponent } from './login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    SigninComponent,
    VerifyEmailComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,

    SharedModulesModule
  ]
})
export class LoginModule { }
