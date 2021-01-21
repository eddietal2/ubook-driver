import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShipperPageRoutingModule } from './shipper-routing.module';

import { ShipperPage } from './shipper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShipperPageRoutingModule
  ],
  declarations: [ShipperPage]
})
export class ShipperPageModule {}
