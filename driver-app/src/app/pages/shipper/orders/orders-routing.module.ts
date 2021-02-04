import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersPage } from './orders.page';

const routes: Routes = [
  {
    path: '/shipper-orders',
    redirectTo: 'orders-page',
    pathMatch: 'full'
  },
  {
    path: '',
    component: OrdersPage,
    children: [
      {
        path: 'orders-page',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../shipper/orders/orders-page/orders-page.module').then(m => m.OrdersPagePageModule)
          }
        ]
      },
      {
        path: 'pending',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../shipper/orders/pending/pending.module').then(m => m.PendingPageModule)
          }
        ]
      },
      {
        path: 'new',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../shipper/orders/new/new.module').then(m => m.NewPageModule)
          }
        ]
      },
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../shipper/orders/history/history.module').then(m => m.HistoryPageModule)
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersPageRoutingModule {}
