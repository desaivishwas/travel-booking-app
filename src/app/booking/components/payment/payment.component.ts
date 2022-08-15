import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBookingData } from '../../shared/interfaces/bookingdata.interface';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() set bookingDetails(value: IBookingData[]) {
    this.bookingData = value;
    this.getTotalCost();
  }
  @Output() goBack: EventEmitter<boolean>;
  @Output() bookSeat: EventEmitter<boolean>;

  bookingData: IBookingData[];
  totalPrice: number = 0;

  constructor() {
    this.goBack = new EventEmitter<boolean>();
    this.bookSeat = new EventEmitter<boolean>();
    this.bookingData = [];
  }

  ngOnInit(): void {
  }

  getTotalCost() {
    let totalCost = 0;
    this.bookingData.forEach(
      (value) => {
        totalCost += value.price * value.seatCount;
      }
    )
    this.totalPrice = totalCost;
  }

  goBackClick() {
    this.goBack.emit(true);
  }

  bookSeatsClick() {
    this.bookSeat.emit(true);
  }

}
