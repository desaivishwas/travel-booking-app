import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingComponent } from './booking.component';
import { BookingHeadComponent } from './components/booking-head/booking-head.component';
import { BookingBodyComponent } from './components/booking-body/booking-body.component';
import { SharedModulesModule } from '../shared-modules/shared-modules.module';
import { PaymentComponent } from './components/payment/payment.component';
import { SuccessComponent } from './components/success/success.component';


@NgModule({
  declarations: [
    BookingComponent,
    BookingHeadComponent,
    BookingBodyComponent,
    PaymentComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModulesModule
  ]
})
export class BookingModule { }
