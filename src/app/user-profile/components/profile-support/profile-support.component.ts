import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-profile-support',
  templateUrl: './profile-support.component.html',
  styleUrls: ['./profile-support.component.css']
})
export class ProfileSupportComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (result) => {
        let userRoles = result.roles
        if (userRoles.customer) {
          this.router.navigate(["/account"])
        }
      }
    )
  }

}
