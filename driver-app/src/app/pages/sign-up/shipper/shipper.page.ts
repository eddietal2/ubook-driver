import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.page.html',
  styleUrls: ['./shipper.page.scss'],
})
export class ShipperPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  profilePicture() {
    // add /sign-up/carrier
    this.router.navigate(['/sign-up/shipper/logo']);
  }
  cancel() {
    this.router.navigate(['/sign-up']);
  }

}
