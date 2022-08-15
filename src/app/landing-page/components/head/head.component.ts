import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  lookingText: string = "Looking to Spend Some Time Off Planet? "
  clickHereText: string = "To Check Out the Destinations Lined Up for You";
  clickHereButtonText: string = "Click Here";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchClick() {
    this.router.navigate(["/search"])
  }

}
