import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidateNegotiationPage } from './candidate-negotiation.page';

const routes: Routes = [
  {
    path: '',
    component: CandidateNegotiationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateNegotiationPageRoutingModule {}
