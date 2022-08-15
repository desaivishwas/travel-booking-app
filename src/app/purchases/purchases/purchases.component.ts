import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireFunctions } from '@angular/fire/compat/functions'
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {

  purchases: Observable<any>;
  products: Observable<any[]>;
  email: any;

  constructor(
    private afFunctions: AngularFireFunctions,
    private afd: AngularFireDatabase,
    private auth: AngularFireAuth
  ) {
    this.email = ""
    this.products = this.afd.list('products').valueChanges();
    this.products.subscribe(result => console.log(result));
    
  }

  ngOnInit(): void {
    
    this.auth.authState.subscribe(auth => {
      if (auth !== null && auth !== undefined) {
        this.email = auth.email
      }
    })

    this.purchases = this.afFunctions.httpsCallable("getPaymentRecord")(this.email)
    this.purchases.subscribe(res => console.log(res))
  }

  unixTimestampToDateString(timestamp: number){
    
    var dateStr = new Date(timestamp * 1000).toLocaleDateString("en-US", {timeZone: "America/New_York"})
    var timeStr = new Date(timestamp * 1000).toLocaleTimeString("en-US", {timeZone: "America/New_York"})

    return timeStr + " " + dateStr
  }


  

}
