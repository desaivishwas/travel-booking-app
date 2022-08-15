import { IBookingSeat } from "./bookingseat.interface";

export interface IBookingDetails {
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
    seatType: IBookingSeat[]
}