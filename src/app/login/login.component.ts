import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.auth.user$.forEach(
      (value) => {
        if (value) {
          this.router.navigate(["/"])
        }
      }
    )
  }
}
