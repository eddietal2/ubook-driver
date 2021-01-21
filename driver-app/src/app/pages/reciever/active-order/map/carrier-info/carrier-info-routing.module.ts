import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrierInfoPage } from './carrier-info.page';

const routes: Routes = [
  {
    path: '',
    component: CarrierInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrierInfoPageRoutingModule {}
