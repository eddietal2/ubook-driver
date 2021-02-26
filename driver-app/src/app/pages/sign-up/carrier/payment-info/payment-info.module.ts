import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentInfoPageRoutingModule } from './payment-info-routing.module';

import { PaymentInfoPage } from './payment-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    PaymentInfoPageRoutingModule
  ],
  declarations: [PaymentInfoPage]
})
export class PaymentInfoPageModule {}
