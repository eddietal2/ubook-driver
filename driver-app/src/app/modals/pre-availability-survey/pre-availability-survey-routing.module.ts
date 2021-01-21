import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreAvailabilitySurveyPage } from './pre-availability-survey.page';

const routes: Routes = [
  {
    path: '',
    component: PreAvailabilitySurveyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreAvailabilitySurveyPageRoutingModule {}
