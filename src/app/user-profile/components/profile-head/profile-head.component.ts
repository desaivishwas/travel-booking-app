import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-head',
  templateUrl: './profile-head.component.html',
  styleUrls: ['./profile-head.component.css']
})
export class ProfileHeadComponent implements OnInit {

  headText: string;

  constructor() {
    this.headText = "USER ACCOUNT"
  }

  ngOnInit(): void {
  }

}
