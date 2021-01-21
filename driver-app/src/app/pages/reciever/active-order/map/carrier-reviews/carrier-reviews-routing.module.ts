import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrierReviewsPage } from './carrier-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: CarrierReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrierReviewsPageRoutingModule {}
