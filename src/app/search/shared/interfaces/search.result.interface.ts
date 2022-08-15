import { ISeatType } from "./seat.type.interface";

export interface ISearchResult {
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
    seatType: ISeatType[]
}