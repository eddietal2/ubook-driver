import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
  }
  createOrderPreset() {
    this.router.navigate(['/shipper/new/presets']);
  }

}
