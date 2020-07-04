import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import {google} from '@google/maps';


@Component({
  selector: 'app-g-map',
  templateUrl: './g-map.component.html',
  styleUrls: ['./g-map.component.css']
})
export class GMapComponent implements OnInit {
  sourceLatitude: number;
  sourceLongitude: number;
  //initial center position
  lat: Number;
  lng: Number;
  //google maps zoom
  zoom: Number = 14;
  sourceAddress: string;
  destinationAddress: string;
  private geoCoder;
  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) { }

  ngOnInit(): void {

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();

      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set sourceLatitude, sourceLongitude and zoom
          this.sourceLatitude = place.geometry.location.lat();
          this.sourceLongitude = place.geometry.location.lng();

          // this.destinationLatitude = -29.851595770300214;
          // this.destinationLongitude = 31.003887231738265;

          this.zoom = 12;
        });
      });
    });
  }
  //end of NgOnInit

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.sourceLatitude = position.coords.latitude;
        this.sourceLongitude = position.coords.longitude;
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.sourceLatitude, this.sourceLongitude);
      });
    }
  }
  //end of setCurrentLocation
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.sourceLatitude = $event.coords.lat;
    this.sourceLongitude = $event.coords.lng;
    this.getAddress(this.sourceLatitude, this.sourceLongitude);
  }
  ///end of markerDraged
  getAddress(sourceLatitude, sourceLongitude) {
    this.geoCoder.geocode({ 'location': { lat: sourceLatitude, lng: sourceLongitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.sourceAddress = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
  //end
  //Get Directions
  dir = undefined;
  public getDirection() {
    this.dir = {
      origin: { lat: this.lat, lng: this.lng },
      destination: { lat: -29.8470, lng: 31.0020 }
    }
  }
  //end

}
