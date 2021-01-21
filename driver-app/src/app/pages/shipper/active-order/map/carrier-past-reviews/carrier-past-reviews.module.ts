import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrierPastReviewsPageRoutingModule } from './carrier-past-reviews-routing.module';

import { CarrierPastReviewsPage } from './carrier-past-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrierPastReviewsPageRoutingModule
  ],
  declarations: [CarrierPastReviewsPage]
})
export class CarrierPastReviewsPageModule {}
