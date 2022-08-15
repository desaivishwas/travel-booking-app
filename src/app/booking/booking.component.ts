import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from './services/booking.service';
import { IBookingDetails } from './shared/interfaces/bookingdetails.interface';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  journeyId: string;
  journeyDetails: IBookingDetails;
  // coordinates: number[];

  constructor(
    private router: ActivatedRoute,
    private bookingService: BookingService
  ) {
    this.journeyId = "";
    this.journeyDetails = {} as IBookingDetails;
    // this.coordinates = [];
  }

  ngOnInit(): void {
    this.router.queryParams
      .subscribe(params => {
        this.journeyId = params["journeyid"];
      });

    this.getJourneyDetails();
    // this.getLocationDetails();
  }

  getJourneyDetails() {

    this.bookingService.getBookingResult()
      .then(
        (result) => {
          result.subscribe(
            (result) => {
              this.journeyDetails = result.filter(
                (value) => {
                  return value.id == this.journeyId
                }
              )[0];
            })
        });
  }
}
