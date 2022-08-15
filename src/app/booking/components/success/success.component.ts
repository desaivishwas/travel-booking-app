import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserJourney } from 'src/app/shared/interfaces/userjourney.interface';
import { BookingService } from '../../services/booking.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  userJourneyId: string;
  userJourney: IUserJourney;
  qrURLValue: string = "";

  successHeadText: string = "Success!";
  successBodyText: string = "Congratulations! You have successfully booked your space flight with the following details:";

  textDuration: string = "Duration (in months):&nbsp;";
  textFrom: string = "From:&nbsp;";
  textTo: string = "To:&nbsp;";


  successFootText: string = "We will see you soon.";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService
  ) {
    this.userJourney = {} as IUserJourney;
  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.userJourneyId = params["bid"];
        this.getJourneyDetails();
      });
  }

  getJourneyDetails() {
    this.bookingService.getBookingDetails(this.userJourneyId)
      .then(
        (doc) => {
          if (doc.exists) {
            this.userJourney = <IUserJourney>doc.data()
            this.qrURLValue = window.location.href
          }
          else {
            console.log("Document Not Found");
          }
        }
      )
  }

  goHome() {
    this.router.navigate(["/"])
  }

}
