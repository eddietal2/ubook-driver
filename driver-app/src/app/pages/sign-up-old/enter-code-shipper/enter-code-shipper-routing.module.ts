import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterCodeShipperPage } from './enter-code-shipper.page';

const routes: Routes = [
  {
    path: '',
    component: EnterCodeShipperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterCodeShipperPageRoutingModule {}
