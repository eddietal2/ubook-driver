import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidateReviewsPageRoutingModule } from './candidate-reviews-routing.module';

import { CandidateReviewsPage } from './candidate-reviews.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidateReviewsPageRoutingModule
  ],
  declarations: [CandidateReviewsPage]
})
export class CandidateReviewsPageModule {}
