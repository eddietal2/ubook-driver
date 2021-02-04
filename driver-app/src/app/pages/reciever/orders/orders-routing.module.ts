import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersPage } from './orders.page';

const routes: Routes = [
  {
    path: '/reciever-orders',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: OrdersPage,
    children: [
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../reciever/orders/orders-page/orders-page.module').then(m => m.OrdersPagePageModule)
          }
        ]
      },
      {
        path: 'pending',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../reciever/orders/pending/pending.module').then(m => m.PendingPageModule)
          }
        ]
      },
      {
        path: 'new',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../reciever/orders/new/new.module').then(m => m.NewPageModule)
          }
        ]
      },
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../reciever/orders/history/history.module').then(m => m.HistoryPageModule)
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