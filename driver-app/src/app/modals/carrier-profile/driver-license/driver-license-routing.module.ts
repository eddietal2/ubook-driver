import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverLicensePage } from './driver-license.page';

const routes: Routes = [
  {
    path: '',
    component: DriverLicensePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DriverLicensePageRoutingModule {}
