import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrierHistoryPage } from './carrier-history.page';

const routes: Routes = [
  {
    path: '',
    component: CarrierHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrierHistoryPageRoutingModule {}
