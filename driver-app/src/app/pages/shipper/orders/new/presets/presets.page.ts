import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-presets',
  templateUrl: './presets.page.html',
  styleUrls: ['./presets.page.scss'],
})
export class PresetsPage implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  createPreset() {
    this.router.navigate(['/shipper-orders/new/new-presets'])
  }
  usePreset() {
    console.log('Using Preset ..');
    this.router.navigate(['/shipper-orders/new/presets/preset-info'])
  }
  editPreset() {
    
  }
  deletePreset() {

  }
  async deleteAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Are you sure you want to Delete this Preset?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
