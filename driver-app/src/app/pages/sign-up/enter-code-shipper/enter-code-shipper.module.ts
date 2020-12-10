import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterCodeShipperPageRoutingModule } from './enter-code-shipper-routing.module';

import { EnterCodeShipperPage } from './enter-code-shipper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EnterCodeShipperPageRoutingModule
  ],
  declarations: [EnterCodeShipperPage]
})
export class EnterCodeShipperPageModule {}
