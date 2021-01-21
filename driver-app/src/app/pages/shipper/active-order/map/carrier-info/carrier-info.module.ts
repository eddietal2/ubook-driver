import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrierInfoPageRoutingModule } from './carrier-info-routing.module';

import { CarrierInfoPage } from './carrier-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrierInfoPageRoutingModule
  ],
  declarations: [CarrierInfoPage]
})
export class CarrierInfoPageModule {}
