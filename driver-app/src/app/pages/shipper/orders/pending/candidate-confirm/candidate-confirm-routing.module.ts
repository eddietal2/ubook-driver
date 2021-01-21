import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidateConfirmPage } from './candidate-confirm.page';

const routes: Routes = [
  {
    path: '',
    component: CandidateConfirmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateConfirmPageRoutingModule {}
