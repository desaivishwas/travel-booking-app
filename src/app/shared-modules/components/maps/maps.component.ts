import { Component, OnInit, Input } from '@angular/core';
import { MapDirectionsService } from '@angular/google-maps';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css'],
})
export class MapsComponent implements OnInit {

  @Input() set coordinateArray(value: number[]) {
    this.destination = []
    this.destination = value
    setTimeout(() => {
      this.calcRoute()
    }, 5000);
  }

  //#region Google Maps Variables
  zoom: number;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions;
  selectedlocation: google.maps.LatLngLiteral[];
  CurrentLat: number;
  CurrentLong: number;
  markers: any[] = [];
  destination: any[] = []
  directionsResults$: Observable<google.maps.DirectionsResult | undefined>;

  constructor(
    private mapDirectionsService: MapDirectionsService
  ) {
    this.zoom = 4.5;

    this.options = {
      mapTypeId: 'roadmap',
      zoomControl: true,
      scrollwheel: true,
      disableDoubleClickZoom: true,
      maxZoom: 20,
      minZoom: 1,
    }
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.CurrentLat = position.coords.latitude;
      this.CurrentLong = position.coords.longitude;

      this.markers.push({
        position: {
          lat: this.CurrentLat,
          lng: this.CurrentLong,
        },
        options: { animation: google.maps.Animation.DROP },
      })
    })


  }

  calcRoute() {
    const request: google.maps.DirectionsRequest = {
      destination: { lat: this.destination[0], lng: this.destination[1] },
      origin: { lat: this.CurrentLat, lng: this.CurrentLong },
      travelMode: google.maps.TravelMode.DRIVING,
    };
    this.directionsResults$ = this.mapDirectionsService.route(request).pipe(map(response => response.result));
  }
}