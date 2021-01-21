import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditOrderPage } from './edit-order.page';

const routes: Routes = [
  {
    path: '',
    component: EditOrderPage
  },
  {
    path: 'confirm',
    loadChildren: () => import('./confirm/confirm.module').then( m => m.ConfirmPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./input/input.module').then( m => m.InputPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditOrderPageRoutingModule {}
