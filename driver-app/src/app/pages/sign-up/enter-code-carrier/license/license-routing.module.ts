import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicensePage } from './license.page';

const routes: Routes = [
  {
    path: '',
    component: LicensePage
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicensePageRoutingModule {}
