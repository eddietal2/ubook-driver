import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnterCodeCarrierPage } from './enter-code-carrier.page';

const routes: Routes = [
  {
    path: '',
    component: EnterCodeCarrierPage
  },
  {
    path: 'license',
    loadChildren: () => import('./license/license.module').then( m => m.LicensePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnterCodeCarrierPageRoutingModule {}
