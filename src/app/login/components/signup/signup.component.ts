import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  hide: boolean;

  internalAuthHeader: string;
  externalAuthHeader: string;
  signupText: string;

  constructor(
    private formBuilder: FormBuilder,
    public auth: AuthService
  ) {
    this.signupForm = this.formBuilder.group(
      {
        userEmail: ["", [Validators.required, Validators.email]],
        userPassword: ["", [Validators.required, Validators.minLength(8)]], //, Validators.minLength(8)
        userRePassword: ["", [Validators.required]]
      },
    );
    this.hide = true;

    this.internalAuthHeader = "sign up with email"
    this.externalAuthHeader = "or sign up with"
    this.signupText = "Sign Up"
  }

  private checkPassword() {
    let userPass = this.signupData['userPassword'].value
    let userRePass = this.signupData['userRePassword'].value
    return userPass == userRePass;
  }

  ngOnInit(): void {
  }

  get signupData() { return this.signupForm.controls; }

  public signupClick() {

    if (!this.checkPassword()) {
      alert("Passwords Do Not Match.")
    }
    else {
      let userEmail = this.signupData['userEmail'].value;
      let userPass = this.signupData['userPassword'].value
      // console.log(userEmail, userPass)
      this.auth.signUp(userEmail, userPass)
    }
  }

  public signupClickGoogle() {
    this.auth.googleSignup();
    // this.auth.googleSignin()
  }

}
