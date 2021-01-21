import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrierReviewsPageRoutingModule } from './carrier-reviews-routing.module';

import { CarrierReviewsPage } from './carrier-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrierReviewsPageRoutingModule
  ],
  declarations: [CarrierReviewsPage]
})
export class CarrierReviewsPageModule {}
