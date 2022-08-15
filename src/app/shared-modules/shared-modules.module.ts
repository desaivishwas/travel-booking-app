import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { GoogleMapsModule } from '@angular/google-maps';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { UserChatModule } from '../user-chat/user-chat.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { MapsComponent } from './components/maps/maps.component';
import { CounterComponent } from './components/counter/counter.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { QRCodeModule } from 'angularx-qrcode';




@NgModule({
  declarations: [
    NavComponentComponent,
    MapsComponent,
    CounterComponent,
    QrcodeComponent
  ],
  imports: [
    CommonModule,
    SharedModulesRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSidenavModule,
    GoogleMapsModule,
    QRCodeModule,

    CarouselModule

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    CarouselModule,

    UserChatModule,

    CounterComponent,
    MapsComponent,
    NavComponentComponent,
    QrcodeComponent
  ]
})
export class SharedModulesModule { }
