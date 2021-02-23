import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(
    private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
  }
  async done() {
    await this.router.navigate(['/shipper-orders/pending']);
    await this.successToast();
  }
  async successToast() {
    const toast = await this.toastController.create({
      cssClass: 'new-order-toast',
      message: '<p style="display: inline; position: relative; top: -10px; left: 10px;">Order listed as a Future Order.</p>',
      duration: 2000
    });
    toast.present();
  }


}
