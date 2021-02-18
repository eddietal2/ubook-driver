import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewPresetPage } from './review-preset.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewPresetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReviewPresetPageRoutingModule {}
