import { Component, OnInit } from '@angular/core';
import { IUserJourney } from 'src/app/shared/interfaces/userjourney.interface';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { UserprofileService } from '../../services/userprofile.service';

@Component({
  selector: 'app-profile-history',
  templateUrl: './profile-history.component.html',
  styleUrls: ['./profile-history.component.css']
})
export class ProfileHistoryComponent implements OnInit {

  textHeader: string = "User Booking History";

  panelOpenState = false;
  userJourneys: IUserJourney[];

  constructor(
    private userProfileService: UserprofileService,
    private auth: AuthService
  ) {
    this.userJourneys = [];
  }

  ngOnInit(): void {
    this.getUserJourneys();
  }

  getUserJourneys() {
    this.userProfileService.getUserJourneys()
      .then(
        (result) => {
          result.subscribe(
            (result) => {
              var results = result.filter(
                (value) => {
                  return value.user.uid == this.auth.currentUserId
                }
              )
              // console.log(results);
              this.userJourneys = results;
            }
          )
        }
      )
  }

}
