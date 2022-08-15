import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { IUserProfile } from 'src/app/user-profile/shared/interfaces/user.profile.interface'
import { IAddress } from '../../shared/interfaces/user.address.interface';

@Component({
  selector: 'app-profile-body',
  templateUrl: './profile-body.component.html',
  styleUrls: ['./profile-body.component.css']
})
export class ProfileBodyComponent implements OnInit {

  profileMessage: string;
  userProfile: IUserProfile;

  cantSubmit: boolean = false;
  profileUpdated: boolean = false;

  constructor(
    private auth: AuthService
  ) {
    this.profileMessage = "";

    this.userProfile = {} as IUserProfile;
    this.userProfile.address = {} as IAddress;
    this.userProfile.contacts = []
    this.userProfile.profileCompleted = false;
  }

  ngOnInit(): void {
    this.auth.currentUserId;
    this.userProfile = this.auth.currentUserProfile;

    if (!this.userProfile.profileCompleted) {
      this.profileMessage = "Your profile is incomplete! Please fill in the following data and complete your profile."
    }
    this.initUserContact();
  }

  private initUserContact() {
    let userContactInfo = {
      contactType: "",
      contactCountryCode: "",
      contactNumber: ""
    }
    if (this.userProfile.contacts.length == 0) {
      this.userProfile.contacts.push(userContactInfo)
    }
  }

  updateClick() {
    // This is just lazy worker. Let it be.
    let canSubmit = true;
    canSubmit &&= this.userProfile.fullName.length > 0; console.log(canSubmit)
    canSubmit &&= this.userProfile.address.addressLine1.length > 0; console.log(canSubmit)
    canSubmit &&= this.userProfile.address.addressCity.length > 0; console.log(canSubmit)
    canSubmit &&= this.userProfile.address.addressState.length > 0; console.log(canSubmit)
    canSubmit &&= this.userProfile.address.addressCountry.length > 0; console.log(canSubmit)
    canSubmit &&= this.userProfile.address.addressZip.toString().length > 0;
    console.log(canSubmit)
    this.userProfile.contacts.forEach(
      (result) => {
        canSubmit &&= result.contactType.toString().length > 0;
        console.log(canSubmit)
        canSubmit &&= result.contactCountryCode.toString().length > 0;
        console.log(canSubmit)
        canSubmit &&= result.contactNumber.toString().length > 0;
        console.log(canSubmit)
        // canSubmit &&= cType && cCode && cNumb;
        console.log(canSubmit)
      }
    )

    this.cantSubmit = !canSubmit
    this.profileUpdated = false;
    if (!this.cantSubmit) {
      this.userProfile.profileCompleted = true;
      this.auth.updateUserProfile(this.userProfile)
      this.profileUpdated = true;
    }
  }

}
