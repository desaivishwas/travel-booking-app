import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUserBookingDetails } from 'src/app/shared/interfaces/userbookingdetails.interface';
import { IUserJourney } from 'src/app/shared/interfaces/userjourney.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { IBookingDetails } from '../shared/interfaces/bookingdetails.interface';
import { ILocation } from '../shared/interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService
  ) { }

  public async getBookingResult(): Promise<Observable<IBookingDetails[]>> {
    return this.afs.collection<IBookingDetails>("journey").valueChanges()
  }

  public async getCoordinates(): Promise<Observable<ILocation[]>> {
    return this.afs.collection<ILocation>("launchsite").valueChanges()
  }

  public async setSeatBooking(id: string, $seatCount: number) {
    this.afs.doc(`journey/${id}`).update({ seatCount: $seatCount });
  }

  public setUserJourney(userJourney: IUserBookingDetails, router: Router) {
    const id = this.afs.createId();

    new Promise<any>((resolve, reject) => {
      this.afs.collection(`userjourney`).doc(id)
        .set({
          user: this.auth.currentUserProfile,
          journey: userJourney,
          id: id
        })
        .then(
          () => {
            this.sendEmailText(userJourney);
          },
          (error) => { reject(error) }
        )
    }) 

    console.log("reading id: " +id)
    return id

    

    
    
    

  }

  

  private sendEmailText(userJourney: IUserBookingDetails) {
    const id = this.afs.createId();

    let html = `
    Hello ${this.auth.currentUserProfile.fullName},
    <br><br>
    Here's your journey detail.
    <br>
      <div style="">
        <div>
          Journey Date: ${userJourney.date.toDate()}
        </div>
        <div>
          Duration (months): ${userJourney.duration}
        </div>
        <div>
          From: ${userJourney.from}
        </div>
        <div>
          to: ${userJourney.to}
        </div>
      </div>
    `
    userJourney.seatType.forEach(
      (value) => {
        if (value.seatCount > 0) {
          html +=
            `
              <div>
                <div>
                  Seat Type: ${value.seatType}
                </div>
                <div>
                  Seat Count: ${value.seatCount}
                </div>
              </div>
            `
        }
      }
    )

    html += `<br><br> See You Soon. <br>Best,<br>Team AstroWhirled`

    new Promise<any>((resolve, reject) => {
      this.afs.collection(`mail`).doc(id)
        .set({
          to: this.auth.currentUserProfile.email,
          message: {
            subject: "Congratulations! You are ready to soar!",
            html: html
          }
        })
        .then(
          () => {
          },
          (error) => { reject(error) }
        )
    })

    new Promise<any>((resolve, reject) => {
      this.afs.collection(`messages`).doc(id)
        .set({
          to: "+18126061052",
          body: `Congratulations on booking a trip around ${userJourney.to}. Check your email for more details.`
        })
        .then(
          () => {
          },
          (error) => { reject(error) }
        )
    })
  }

  public async getBookingDetails(journeyId: string): Promise<any> {
    return this.afs.collection<IUserJourney>("userjourney").doc(`${journeyId}`).ref.get()
  }


}