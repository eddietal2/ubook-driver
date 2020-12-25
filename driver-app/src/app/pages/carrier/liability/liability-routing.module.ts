import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiabilityPage } from './liability.page';

const routes: Routes = [
  {
    path: '',
    component: LiabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiabilityPageRoutingModule {}
