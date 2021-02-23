import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preset-photos',
  templateUrl: './preset-photos.page.html',
  styleUrls: ['./preset-photos.page.scss'],
})
export class PresetPhotosPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  review() {
    this.router.navigate(['/shipper-orders/new/presets/review-preset'])
  }

}
