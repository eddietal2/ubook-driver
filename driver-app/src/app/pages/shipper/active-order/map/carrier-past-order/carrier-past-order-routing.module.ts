import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrierPastOrderPage } from './carrier-past-order.page';

const routes: Routes = [
  {
    path: '',
    component: CarrierPastOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrierPastOrderPageRoutingModule {}
