import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespondWithRatePageRoutingModule } from './respond-with-rate-routing.module';

import { RespondWithRatePage } from './respond-with-rate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RespondWithRatePageRoutingModule
  ],
  declarations: [RespondWithRatePage]
})
export class RespondWithRatePageModule {}
