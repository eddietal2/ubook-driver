import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidateReviewsPage } from './candidate-reviews.page';

const routes: Routes = [
  {
    path: '',
    component: CandidateReviewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateReviewsPageRoutingModule {}
