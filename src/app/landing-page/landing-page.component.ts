import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service';
import { IUser } from '../shared/interfaces/user.interface';
import { LandingPageService } from './services/landing-page.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  constructor(
    private service: LandingPageService,
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

}
