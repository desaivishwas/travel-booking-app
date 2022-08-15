import { IUserProfile } from "src/app/user-profile/shared/interfaces/user.profile.interface";
import { IUserBookingDetails } from "./userbookingdetails.interface";

export interface IUserJourney {
    id: string;
    journey: IUserBookingDetails;
    user: IUserProfile;
}