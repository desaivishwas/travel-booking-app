import { IUserSeat } from "./userseat.interface";

export interface IUserBookingDetails {
    id: string;
    from: string;
    fromid: string;
    to: string;
    date: any;
    //time: Time;
    price: number;
    vehicleType: string;
    duration: number;
    seatCount: number;
    seatType: IUserSeat[]
}