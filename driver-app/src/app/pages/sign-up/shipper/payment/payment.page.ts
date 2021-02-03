import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
  }
  finalizeSignUp() {
    // /sign-up/carrier/
  this.router.navigate(['/sign-up/shipper/success']);
  }
  cancel() {
  this.router.navigate(['/sign-up']);
  }
  async skipPaymentInfo() {
    const alert = await this.alertController.create({
      cssClass: 'skip-alert',
      header: 'Skip Logo Upload',
      message: 'Are you sure you want to Skip uploading a Profile Picture? You can always add one later.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
