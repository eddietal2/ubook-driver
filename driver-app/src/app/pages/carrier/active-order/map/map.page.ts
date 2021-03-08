import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from
  '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { AlertController, ModalController } from '@ionic/angular';
import { LocationService } from '../../../../services/location.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, AfterViewInit {
  isLoaded = false;
  isSigned = false;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  map: google.maps.Map;

  constructor(
    private router: Router,
    private locationService: LocationService,
    private alertController: AlertController) { }


    ngOnInit() {
    }
    ngAfterViewInit() {
      this.initMap();
    }
    initMap(): void {
     this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: this.locationService.lat, lng: this.locationService.lng },
        zoom: 8,
      });
    }
    loadedPage(e) {
      if (e.detail.checked) {
        this.router.navigate(['/carrier-map/loaded']);
      } else {
        this.router.navigate(['/carrier-map']);
      }
    }
    messages() {
      this.router.navigate(['/carrier-map/messages']);
    }
    edit() {
      this.router.navigate(['/carrier-map/edit']);
    }
    cancel() {
      this.router.navigate(['/carrier-map/cancel']);
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
