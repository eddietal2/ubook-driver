import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingPage } from './pending.page';

const routes: Routes = [
  {
    path: '',
    component: PendingPage
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'cancel',
    loadChildren: () => import('./cancel/cancel.module').then( m => m.CancelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingPageRoutingModule {}
