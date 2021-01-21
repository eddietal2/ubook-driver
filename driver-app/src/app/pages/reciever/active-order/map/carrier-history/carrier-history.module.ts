import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrierHistoryPageRoutingModule } from './carrier-history-routing.module';

import { CarrierHistoryPage } from './carrier-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrierHistoryPageRoutingModule
  ],
  declarations: [CarrierHistoryPage]
})
export class CarrierHistoryPageModule {}
