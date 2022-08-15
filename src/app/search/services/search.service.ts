import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IDestination } from '../shared/interfaces/destination.interface';
import { ISearchResult } from '../shared/interfaces/search.result.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  destination: IDestination[];

  constructor(
    private afs: AngularFirestore,
    // private database: AngularFireDatabase,
    // private auth: AngularFireAuth
  ) {
    this.destination = []
  }

  public async getDestinations(): Promise<Observable<IDestination[]>> {

    return this.afs.collection<IDestination>("destination").valueChanges()

    //#region Reference Data
    // return [
    //   {
    //     id: "ID0001",
    //     destinationId: 1,
    //     destinationGroup: "Planets",
    //     destination: "Planet 1"
    //   },
    //   {
    //     id: "ID0002",
    //     destinationId: 2,
    //     destinationGroup: "Planets",
    //     destination: "Planet 2"
    //   },
    //   {
    //     id: "ID0003",
    //     destinationId: 3,
    //     destinationGroup: "Planets",
    //     destination: "Planet 3"
    //   },
    //   {
    //     id: "ID0004",
    //     destinationId: 4,
    //     destinationGroup: "Planets",
    //     destination: "Planet 4"
    //   },
    //   {
    //     id: "ID0005",
    //     destinationId: 5,
    //     destinationGroup: "Planets",
    //     destination: "Planet 5"
    //   },
    //   {
    //     id: "ID0006",
    //     destinationId: 6,
    //     destinationGroup: "Planets",
    //     destination: "Planet 6"
    //   },
    //   {
    //     id: "ID0007",
    //     destinationId: 7,
    //     destinationGroup: "Planets",
    //     destination: "Planet 7"
    //   },
    //   {
    //     id: "ID0008",
    //     destinationId: 8,
    //     destinationGroup: "Planets",
    //     destination: "Planet 8"
    //   },
    //   {
    //     id: "ID0009",
    //     destinationId: 9,
    //     destinationGroup: "Moons",
    //     destination: "Moon 1"
    //   },
    //   {
    //     id: "ID0010",
    //     destinationId: 10,
    //     destinationGroup: "Moons",
    //     destination: "Moon 2"
    //   },
    //   {
    //     id: "ID0011",
    //     destinationId: 11,
    //     destinationGroup: "Moons",
    //     destination: "Moon 3"
    //   }
    // ]
    //#endregion
  }

  public async getAFSSearchResult(): Promise<Observable<ISearchResult[]>> {
    return this.afs.collection<ISearchResult>("journey").valueChanges()
  }

  // public getSearchResult(): ISearchResult[] {
  //#region Reference Data
  // return [
  //   {
  //     id: "someid001",
  //     from: "Launch Site 1",
  //     fromid: "ID001",
  //     to: "Planet 1",
  //     date: new Date("2022-12-25"),
  //     //time: 
  //     price: 5000,
  //     vehicleType: "Type I",
  //     duration: 4,
  //     seatCount: 280,
  //     seatType: [
  //       {
  //         id: "someid0001",
  //         typeid: 1,
  //         seatType: "Very Expensive",
  //         price: 20000
  //       },
  //       {
  //         id: "someid0002",
  //         typeid: 2,
  //         seatType: "Expensive",
  //         price: 18000
  //       },
  //       {
  //         id: "someid0003",
  //         typeid: 3,
  //         seatType: "Moderate",
  //         price: 12000
  //       },
  //       {
  //         id: "someid0004",
  //         typeid: 4,
  //         seatType: "Not Expensive",
  //         price: 10000
  //       },
  //       {
  //         id: "someid0005",
  //         typeid: 5,
  //         seatType: "Cheap",
  //         price: 5000
  //       },
  //     ]
  //   },
  //   {
  //     id: "someid002",
  //     from: "Launch Site 2",
  //     fromid: "ID002",
  //     to: "Planet 2",
  //     date: new Date("2023-01-10"),
  //     //time: 
  //     price: 7000,
  //     vehicleType: "Type I",
  //     duration: 4,
  //     seatCount: 280,
  //     seatType: [
  //       {
  //         id: "someid0001",
  //         typeid: 1,
  //         seatType: "Very Expensive",
  //         price: 23000
  //       },
  //       {
  //         id: "someid0003",
  //         typeid: 3,
  //         seatType: "Moderate",
  //         price: 16000
  //       },
  //       {
  //         id: "someid0005",
  //         typeid: 5,
  //         seatType: "Cheap",
  //         price: 7000
  //       }
  //     ]
  //   },
  //   {
  //     id: "someid003",
  //     from: "Launch Site 2",
  //     fromid: "ID002",
  //     to: "Planet 3",
  //     date: new Date("2022-09-25"),
  //     //time: 
  //     price: 25000,
  //     vehicleType: "Type II",
  //     duration: 5,
  //     seatCount: 290,
  //     seatType: [
  //       {
  //         id: "someid0001",
  //         typeid: 1,
  //         seatType: "Very Expensive",
  //         price: 35000
  //       },
  //       {
  //         id: "someid0002",
  //         typeid: 2,
  //         seatType: "Expensive",
  //         price: 30000
  //       },
  //       {
  //         id: "someid0004",
  //         typeid: 4,
  //         seatType: "Not Expensive",
  //         price: 25000
  //       }
  //     ]
  //   },
  //   {
  //     id: "someid004",
  //     from: "Launch Site 1",
  //     fromid: "ID001",
  //     to: "Planet 3",
  //     date: new Date("2022-12-25"),
  //     //time: 
  //     price: 5000,
  //     vehicleType: "Type III",
  //     duration: 4,
  //     seatCount: 280,
  //     seatType: [
  //       {
  //         id: "someid0001",
  //         typeid: 1,
  //         seatType: "Very Expensive",
  //         price: 20000
  //       },
  //       {
  //         id: "someid0002",
  //         typeid: 2,
  //         seatType: "Expensive",
  //         price: 18000
  //       },
  //       {
  //         id: "someid0003",
  //         typeid: 3,
  //         seatType: "Moderate",
  //         price: 12000
  //       },
  //       {
  //         id: "someid0004",
  //         typeid: 4,
  //         seatType: "Not Expensive",
  //         price: 10000
  //       },
  //       {
  //         id: "someid0005",
  //         typeid: 5,
  //         seatType: "Cheap",
  //         price: 5000
  //       },
  //     ]
  //   },
  //   {
  //     id: "someid005",
  //     from: "Launch Site 3",
  //     fromid: "ID003",
  //     to: "Planet 4",
  //     date: new Date("2023-01-10"),
  //     //time: 
  //     price: 7000,
  //     vehicleType: "Type II",
  //     duration: 4,
  //     seatCount: 280,
  //     seatType: [
  //       {
  //         id: "someid0001",
  //         typeid: 1,
  //         seatType: "Very Expensive",
  //         price: 23000
  //       },
  //       {
  //         id: "someid0003",
  //         typeid: 3,
  //         seatType: "Moderate",
  //         price: 16000
  //       },
  //       {
  //         id: "someid0005",
  //         typeid: 5,
  //         seatType: "Cheap",
  //         price: 7000
  //       }
  //     ]
  //   },
  //   {
  //     id: "someid006",
  //     from: "Launch Site 3",
  //     fromid: "ID003",
  //     to: "Planet 3",
  //     date: new Date("2022-09-25"),
  //     //time: 
  //     price: 25000,
  //     vehicleType: "Type I",
  //     duration: 5,
  //     seatCount: 290,
  //     seatType: [
  //       {
  //         id: "someid0001",
  //         typeid: 1,
  //         seatType: "Very Expensive",
  //         price: 35000
  //       },
  //       {
  //         id: "someid0002",
  //         typeid: 2,
  //         seatType: "Expensive",
  //         price: 30000
  //       },
  //       {
  //         id: "someid0004",
  //         typeid: 4,
  //         seatType: "Not Expensive",
  //         price: 25000
  //       }
  //     ]
  //   }
  // ]
  //#endregion
  // }
}
