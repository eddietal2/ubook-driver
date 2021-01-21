import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverLicensePageRoutingModule } from './driver-license-routing.module';

import { DriverLicensePage } from './driver-license.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverLicensePageRoutingModule
  ],
  declarations: [DriverLicensePage]
})
export class DriverLicensePageModule {}
