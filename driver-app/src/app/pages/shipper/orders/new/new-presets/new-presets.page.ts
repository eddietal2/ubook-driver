import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-presets',
  templateUrl: './new-presets.page.html',
  styleUrls: ['./new-presets.page.scss'],
})
export class NewPresetsPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  newPresetPickUpAndDelivery() {
    this.router.navigate(['/shipper-orders/new/new-presets/success'])
  }

}
