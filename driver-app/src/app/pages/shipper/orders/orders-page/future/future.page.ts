import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-future',
  templateUrl: './future.page.html',
  styleUrls: ['./future.page.scss'],
})
export class FuturePage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async call() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Call Carrier?',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  message() {
    this.router.navigate(['/shipper-future/messages'])
  }
  cancelOrder() {
    
  }
  back() {

  }
}
