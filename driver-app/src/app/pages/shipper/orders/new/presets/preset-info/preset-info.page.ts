import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preset-info',
  templateUrl: './preset-info.page.html',
  styleUrls: ['./preset-info.page.scss'],
})
export class PresetInfoPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  presetPhotos() {
    this.router.navigate(['/shipper-orders/new/presets/preset-photos'])
  }


}
