import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {

  isUserLoggedIn: boolean
  user: IUser | any

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.isUserLoggedIn = false;
  }

  ngOnInit(): void {
    this.auth.user$.forEach(
      (value) => {
        if (value) {
          this.isUserLoggedIn = true;
        }
      }
    )
  }

  userProfile() {
    this.router.navigate(["/account"])
  }

  signinClick() {
    this.router.navigate(["/login"])
  }

  signoutClick() {
    this.auth.signOut()
  }

}
