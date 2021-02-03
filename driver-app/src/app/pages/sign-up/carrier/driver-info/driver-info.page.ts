import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.page.html',
  styleUrls: ['./driver-info.page.scss'],
})
export class DriverInfoPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
  }
  paymentInfo() {
    // /sign-up/carrier/
  this.router.navigate(['/payment-info']);
  }
  cancel() {
  this.router.navigate(['/']);
  }

}
