import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrierPastReviewsPage } from './carrier-past-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: CarrierPastReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrierPastReviewsPageRoutingModule {}
