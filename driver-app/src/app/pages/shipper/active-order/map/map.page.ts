import { Component, OnInit, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, AfterViewInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 42.5;
  lng = -83.06;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private router: Router,
    private alertController: AlertController) { }

    ngAfterViewInit() {
      this.map = new mapboxgl.Map({
          accessToken: environment.mapbox.accessToken,
          container: 'map',
          style: this.style,
          zoom: 9,
          center: [this.lng, this.lat]
      })

      this.map.on('render', () => {
        // this.map.resize();
      })
      // Add map controls
      this.map.addControl(new mapboxgl.NavigationControl());

    }
    ngOnInit() {
    }
    messages() {
      this.router.navigate(['/messages']);
    }
    edit() {
      this.router.navigate(['/edit']);
    }
    cancel() {
      this.router.navigate(['/cancel']);
    }
    toggleBackdrop() {
    
    }
  async call() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to call --- ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'call-alert',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Call',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
