import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidateAcceptPage } from './candidate-accept.page';

const routes: Routes = [
  {
    path: '',
    component: CandidateAcceptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateAcceptPageRoutingModule {}
