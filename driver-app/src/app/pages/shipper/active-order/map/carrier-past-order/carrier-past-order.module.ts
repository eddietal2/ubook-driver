import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrierPastOrderPageRoutingModule } from './carrier-past-order-routing.module';

import { CarrierPastOrderPage } from './carrier-past-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrierPastOrderPageRoutingModule
  ],
  declarations: [CarrierPastOrderPage]
})
export class CarrierPastOrderPageModule {}
