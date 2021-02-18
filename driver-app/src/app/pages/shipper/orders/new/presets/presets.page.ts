import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-presets',
  templateUrl: './presets.page.html',
  styleUrls: ['./presets.page.scss'],
})
export class PresetsPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }

  createPreset() {
    this.router.navigate(['/shipper-orders/new/new-presets'])
  }
  usePreset() {
    console.log('Using Preset ..');
    
  }

}
