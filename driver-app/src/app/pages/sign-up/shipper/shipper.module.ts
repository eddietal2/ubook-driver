import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShipperPageRoutingModule } from './shipper-routing.module';

import { ShipperPage } from './shipper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShipperPageRoutingModule
  ],
  declarations: [ShipperPage]
})
export class ShipperPageModule {}
