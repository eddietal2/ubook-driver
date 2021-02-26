import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrierPageRoutingModule } from './carrier-routing.module';

import { CarrierPage } from './carrier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CarrierPageRoutingModule
  ],
  declarations: [CarrierPage]
})
export class CarrierPageModule {}
