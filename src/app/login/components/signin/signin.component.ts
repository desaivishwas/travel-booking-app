import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  hide: boolean;

  internalAuthHeader: string;
  externalAuthHeader: string;
  signinText: string;

  constructor(
    private formBuilder: FormBuilder,
    public auth: AuthService
  ) {
    this.loginForm = this.formBuilder.group(
      {
        userEmail: ["", [Validators.required, Validators.email]],
        userPassword: ["", [Validators.required]] //, Validators.minLength(8)
      }
    );
    this.hide = true;

    this.internalAuthHeader = "sign in with email"
    this.externalAuthHeader = "or sign in with"
    this.signinText = "Sign In"
  }

  ngOnInit(): void {
  }

  get loginData() { return this.loginForm.controls; }

  public loginClick() {
    let userEmail = this.loginData['userEmail'].value;
    let userPass = this.loginData['userPassword'].value
    // console.log(userEmail, userPass)
    this.auth.signIn(userEmail, userPass)
  }

  public loginClickGoogle() {
    this.auth.googleSignin()
  }

}
