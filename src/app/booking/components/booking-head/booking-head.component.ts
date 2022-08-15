import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-head',
  templateUrl: './booking-head.component.html',
  styleUrls: ['./booking-head.component.css']
})
export class BookingHeadComponent implements OnInit {

  headText: string;

  constructor() {
    this.headText = "BOOKING PAGE"
  }


  ngOnInit(): void {
  }

}
