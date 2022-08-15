import { Injectable, NgZone } from '@angular/core';

import { Router } from '@angular/router';
import { IUser } from '../../interfaces/user.interface';

import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IUserProfile } from 'src/app/user-profile/shared/interfaces/user.profile.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<IUser | any>;
  uidfilter$: BehaviorSubject<IUserProfile | null>;
  userprofile$: Observable<IUserProfile | any>;
  currentUserProfile: IUserProfile;
  currentUserId: string;

  private userProfileCollection: AngularFirestoreCollection<IUserProfile>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private ngZone: NgZone
  ) {

    this.user$ = this.afAuth.authState
      .pipe(
        switchMap(user => {
          if (user) {
            return this.afs.doc<IUser>(`users/${user.uid}`).valueChanges();
          }
          else {
            return of(null);
          }
        })
      );

    this.uidfilter$ = new BehaviorSubject<IUserProfile | null>(null);
    this.currentUserProfile = {} as IUserProfile;
    this.currentUserId = "";

    this.user$.subscribe(
      result => {
        this.currentUserId = result.uid
        this.userprofile$ = this.afs.collection<IUserProfile>("userprofile").valueChanges();

        this.userprofile$.subscribe(
          (result) => {

            const userprofiles = <IUserProfile[]>result;
            userprofiles.forEach(
              (user) => {
                if (user.uid == this.currentUserId) {
                  this.currentUserProfile = user
                }
              }
            )
          })
      }
    )

    this.userProfileCollection = this.afs.collection<IUserProfile>('userprofile');
  }

  async forgotPassword(passwordResetEmail: string) {
    const resetPass = this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    resetPass
      .then(
        (userData) => {
          console.log("Password reset link sent!")
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  async signUp(email: string, password: string) {
    const userData = this.afAuth.createUserWithEmailAndPassword(email, password);
    return userData
      .then(
        (credential) => {
          this.updateUserData(credential.user)
          this.emailVerification(credential)
        }
      )
      .then(
        () => {
          this.router.navigate(["/account"])
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  private emailVerification(credential: firebase.auth.UserCredential) {
    credential.user?.sendEmailVerification()
      // .then(
      //   (user) => {
      //     this.router.navigate(["/login/verify-email"])
      //   }
      // )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  async signIn(email: string, password: string) {
    const userData = this.afAuth.signInWithEmailAndPassword(email, password);
    return userData
      .then(
        (credential) => {
          this.ngZone.run(
            () => {
              this.updateUserData(credential.user);
              this.router.navigate(["/account"])
            }
          )
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    // const userData = await this.afAuth.signInWithPopup(provider);
    const credential = this.afAuth.signInWithPopup(provider);
    credential
      .then(
        (userData) => {
          return this.updateUserData(userData.user)
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  async googleSignup() {
    const provider = new firebase.auth.GoogleAuthProvider();
    // const userData = await this.afAuth.signInWithPopup(provider);
    const credential = this.afAuth.signInWithPopup(provider);
    credential
      .then(
        (userData) => {
          return this.updateUserData(userData.user)
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  private updateUserData(user: any) { //{ uid, email, displayName, photoURL }) {
    const userRef: AngularFirestoreDocument<IUser> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      roles: {
        customer: true
      },
      userprofileid: user.userprofileid ? user.userprofileid : ""
    }
    this.addUserProfile(user);

    return userRef.set(data, { merge: true })
  }

  private addUserProfile(user: IUser) {
    let userProfile: IUserProfile = {
      uid: user.uid,
      uprofileid: '',
      email: user.email,
      fullName: user.displayName ? user.displayName : "",
      address: {
        addid: "",
        addressLine1: "",
        addressLine2: "",
        addressLine3: "",
        addressCity: "",
        addressState: "",
        addressCountry: "",
        addressZip: ""
      },
      contacts: [],
      photoUrl: user.photoURL ? user.photoURL : "",
      profileCompleted: false
    }

    this.uidfilter$.next(userProfile)

    this.userprofile$.subscribe(
      (result) => {
        if (result.length == 0) {
          this.createUserProfile(userProfile, user)
        }
      }
    )

  }

  private createUserProfile(userprofile: IUserProfile, user: IUser) {
    const id = this.afs.createId();
    userprofile.uprofileid = id;
    this.userProfileCollection.doc(id).set(userprofile);

    user.userprofileid = id
    const userRef: AngularFirestoreDocument<IUser> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      roles: {
        customer: true
      },
      userprofileid: user.userprofileid
    }

    userRef.set(data, { merge: true })

  }

  public updateUserProfile(userData: IUserProfile) {
    this.userProfileCollection.doc(userData.uprofileid).set(userData);
  }

  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(["/login"]);
  }

}
// https://fireship.io/lessons/multi-step-signup-firebase-email-password-auth-angular-reactive-forms/
