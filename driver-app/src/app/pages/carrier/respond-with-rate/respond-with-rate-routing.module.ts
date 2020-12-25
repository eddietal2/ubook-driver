import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespondWithRatePage } from './respond-with-rate.page';

const routes: Routes = [
  {
    path: '',
    component: RespondWithRatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespondWithRatePageRoutingModule {}
