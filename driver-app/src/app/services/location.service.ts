import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {AlertController, MenuController , LoadingController, ToastController} from '@ionic/angular';
import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Plugins } from '@capacitor/core';


const { Geolocation } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  BACKEND_URL = environment.url;
  lat: number;
  lng: number;
  address: string;

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController) { }

    getCurrentPosition() {
      let lat;
      let lng;
      Geolocation.getCurrentPosition()
        .then( result => {
          lat = result.coords.latitude;
          lng = result.coords.longitude;
          const location = {
            lat,
            lng
          };
          console.log(location);
          return location;
        })
        .catch(e => {
          console.log(e);
        });
    }

    watchPosition() {
      const wait = Geolocation.watchPosition({}, (position, err) => {
        if (err) {
          throw Error(err);
        }
        console.log(position);
        return position;
      });
      console.log(wait);
    }

    async loadingCoordinates() {
      const loading = await this.loadingController.create({
        cssClass: 'my-custom-class',
        message: 'Loading Location ... ',
        duration: 3000
      });
      await loading.present();

      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed!');

      return this.getCurrentPosition();
    }
}
