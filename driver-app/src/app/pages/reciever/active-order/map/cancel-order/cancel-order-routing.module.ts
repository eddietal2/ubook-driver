import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelOrderPage } from './cancel-order.page';

const routes: Routes = [
  {
    path: '',
    component: CancelOrderPage
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'confirm',
    loadChildren: () => import('./confirm/confirm.module').then( m => m.ConfirmPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelOrderPageRoutingModule {}
