import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'
import { AngularFireFunctions } from '@angular/fire/compat/functions'
import { AngularFireDatabase} from '@angular/fire/compat/database';



declare var Stripe: any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  products: Observable<any[]>;

  constructor(
    private afFunctions: AngularFireFunctions,
    private afd: AngularFireDatabase
  ) {
    //afFunctions.useEmulator("localhost", 5001);
    
    this.products = this.afd.list('products').valueChanges();
    this.products.subscribe(result => console.log(result));
  }

  ngOnInit(): void {

    this.products = this.afd.list('products').valueChanges()
    console.log(this.products)
  }

  checkout(identifier: string, name: string, cost: number, picture: string, description: string) {
    console.log("purchasing product with this ID: " + identifier)
    var stripeInstance = Stripe(environment.stripe.key)

    this.afFunctions.httpsCallable("checkout")({ 
      identifier: identifier,
      name: name,
      description: description,
      cost: cost,
      picture: picture
    })
      .subscribe(sessionId => {
        stripeInstance.redirectToCheckout({
          sessionId: sessionId})
      })
  }

}
