import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersPage } from './orders.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/carrier-orders',
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
              import('../../carrier/orders/orders-page/orders-page.module').then(m => m.OrdersPagePageModule)
          }
        ]
      },
      {
        path: 'pending',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../carrier/orders/pending/pending.module').then(m => m.PendingPageModule)
          }
        ]
      },
      {
        path: 'open',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../carrier/orders/open/open.module').then(m => m.OpenPageModule)
          }
        ]
      },
      {
        path: 'history',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../../carrier/orders/history/history.module').then(m => m.HistoryPageModule)
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
