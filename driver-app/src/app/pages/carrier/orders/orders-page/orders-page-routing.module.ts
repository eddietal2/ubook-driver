import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersPagePage } from './orders-page.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersPagePage
  },
  {
    path: 'details',
    loadChildren: () => import('./future/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'cancel',
    loadChildren: () => import('./future/cancel/cancel.module').then( m => m.CancelPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersPagePageRoutingModule {}
