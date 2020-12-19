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
}
