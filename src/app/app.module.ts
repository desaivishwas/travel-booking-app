import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModulesModule } from './shared-modules/shared-modules.module';
import { StoreComponent } from './store/store/store.component';
import { PurchasesComponent } from './purchases/purchases/purchases.component'
import { SuccessPageComponent } from './payment-done/success-page/success-page.component';
import { FailPageComponent } from './payment-done/fail-page/fail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    PurchasesComponent,
    SuccessPageComponent,
    FailPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,

    SharedModulesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
