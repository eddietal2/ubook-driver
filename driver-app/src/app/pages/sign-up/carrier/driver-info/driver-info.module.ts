import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverInfoPageRoutingModule } from './driver-info-routing.module';

import { DriverInfoPage } from './driver-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DriverInfoPageRoutingModule
  ],
  declarations: [DriverInfoPage]
})
export class DriverInfoPageModule {}
