import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.page.html',
  styleUrls: ['./picture.page.scss'],
})
export class PicturePage implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {

  }
  paymentInfo() {
    // /sign-up/carrier
    this.router.navigate(['/sign-up/carrier/payment-info']);
  }
  cancel() {
    this.router.navigate(['/sign-up']);
  }
  async skipAlert() {
    const alert = await this.alertController.create({
      cssClass: 'skip-alert',
      header: 'Skip Logo Upload',
      message: 'Are you sure you want to Skip uploading a Profile Picture? You can always add one later.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
