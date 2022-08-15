import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IUserJourney } from 'src/app/shared/interfaces/userjourney.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService
  ) { }

  public async getUserJourneys(): Promise<Observable<IUserJourney[]>> {
    const userId = this.auth.currentUserId;

    return this.afs.collection<IUserJourney>(`userjourney`).valueChanges()

  }


}
