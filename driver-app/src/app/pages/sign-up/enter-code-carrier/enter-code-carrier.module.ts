import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnterCodeCarrierPageRoutingModule } from './enter-code-carrier-routing.module';

import { EnterCodeCarrierPage } from './enter-code-carrier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EnterCodeCarrierPageRoutingModule
  ],
  declarations: [EnterCodeCarrierPage]
})
export class EnterCodeCarrierPageModule {}
