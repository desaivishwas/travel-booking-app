import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserBookingDetails } from 'src/app/shared/interfaces/userbookingdetails.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { BookingService } from '../../services/booking.service';
import { IBookingData } from '../../shared/interfaces/bookingdata.interface';
import { IBookingDetails } from '../../shared/interfaces/bookingdetails.interface';
import { environment } from '../../../../environments/environment'
import { IBookingSeat } from '../../shared/interfaces/bookingseat.interface';
import { AngularFireFunctions } from '@angular/fire/compat/functions'

declare var Stripe: any;


@Component({
  selector: 'app-booking-body',
  templateUrl: './booking-body.component.html',
  styleUrls: ['./booking-body.component.css']
})
export class BookingBodyComponent implements OnInit {

  @Input() set journeyDetails(value: IBookingDetails) {
    this.journeyDetail = value;
    this.getSeatData();
    this.getCoordinates();
  }

  journeyDetail: IBookingDetails;
  coordinates: number[];
  seatData: IBookingData[];
  totalPrice: number;

  journeyHeadText: string = "Trip Details";

  textDestination: string = "Destination";
  textFrom: string = "Starting Point";
  textDate: string = "Leaves On";
  textVehicle: string = "Vehicle Type";
  textSeats: string = "Seats Left";

  textSeatType: string = "Seat Type";
  textSeatPrice: string = "Seat Price (in millions)";
  textSeatCounter: string = "Seat Counter";

  textTotalCost: string = "Total Cost (in millions)";

  isUserLoggedIn: boolean = false;
  canProceed: boolean = false;
  isPaymentReady: boolean = false;

  constructor(
    private bookingService: BookingService,
    private auth: AuthService,
    private router: Router,
    private afFunctions: AngularFireFunctions,
  ) {
    this.journeyDetail = {} as IBookingDetails;
    this.coordinates = [];
    this.seatData = [];
    this.totalPrice = 0;
  }

  ngOnInit(): void {
  }

  getSeatData() {
    this.seatData = []
    this.journeyDetail.seatType.forEach(
      (value) => {
        let seatType = {} as IBookingData;
        seatType.id = value.id;
        seatType.price = value.price;
        seatType.seatCount = 0;
        seatType.seatType = value.seatType;
        seatType.typeid = value.typeid;
        this.seatData.push(seatType);
      }
    )
  }

  getCoordinates() {

    this.bookingService.getCoordinates()
      .then(
        (result) => {
          result.subscribe(
            (result) => {
              var results = result.filter(
                (value) => {
                  return value.id == this.journeyDetail.fromid
                }
              )[0];
              this.coordinates.push(
                results.coordinate1,
                results.coordinate2
              )
            }
          )
        }
      )
  }

  setCounter(count: number, id: string) {
    let totalCost = 0;
    this.seatData.forEach(
      (value) => {
        if (value.id == id) {
          value.seatCount = count;
        }
        totalCost += value.price * value.seatCount;
      }
    )
    this.totalPrice = totalCost;
    this.canProceed = false;
    if (this.totalPrice > 0) {
      this.canProceed = true;
    }
  }

  proceedToPay() {
    this.auth.user$.forEach(
      (value) => {
        if (value) {
          this.isUserLoggedIn = true
        }
        if (this.isUserLoggedIn) {
          this.isPaymentReady = true;
        }
        else {
        }
      });
  }

  goBack() {
    this.totalPrice = 0;
    this.canProceed = false;
    this.getSeatData();
    this.isPaymentReady = false;
  }

  bookSeats() {
    let seatCount = 0
    this.seatData.forEach(
      (result) => {
        seatCount += result.seatCount;
      }
    )
    this.bookingService.setSeatBooking(this.journeyDetail.id, this.journeyDetail.seatCount - seatCount)

    let userJourney = this.journeyDetail
    userJourney.seatType = this.seatData
    var id = this.bookingService.setUserJourney(<IUserBookingDetails>userJourney, this.router)
    console.log("goal url: " + environment.deploy_url + id)
    this.checkout("null",
      "Trip to outer space",
      this.totalPrice,
      "https://astronomy.com/-/media/Images/News%20and%20Observing/News/2021/04/sts1landing.jpg",
      "Trip to outer space",
      environment.deploy_url + "/booking/success?bid=" + id
    )

  }

  checkout(identifier: string, name: string, cost: number, picture: string, description: string, success_url: string) {
    console.log("purchasing product with this ID: " + identifier)
    var stripeInstance = Stripe(environment.stripe.key)

    this.afFunctions.httpsCallable("checkout")({
      identifier: identifier,
      name: name,
      description: description,
      cost: cost * 100,
      picture: picture,
      success_url: success_url
    })
      .subscribe(sessionId => {
        stripeInstance.redirectToCheckout({
          sessionId: sessionId
        })
      })
  }

}
