import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapPage } from './map.page';

const routes: Routes = [
  {
    path: '',
    component: MapPage
  },
  {
    path: 'order-details',
    loadChildren: () => import('./order-details/order-details.module').then( m => m.OrderDetailsPageModule)
  },
  {
    path: 'carrier-info',
    loadChildren: () => import('./carrier-info/carrier-info.module').then( m => m.CarrierInfoPageModule)
  },
  {
    path: 'carrier-history',
    loadChildren: () => import('./carrier-history/carrier-history.module').then( m => m.CarrierHistoryPageModule)
  },
  {
    path: 'cancel-order',
    loadChildren: () => import('./cancel-order/cancel-order.module').then( m => m.CancelOrderPageModule)
  },
  {
    path: 'edit-order',
    loadChildren: () => import('./edit-order/edit-order.module').then( m => m.EditOrderPageModule)
  },
  {
    path: 'carrier-past-order',
    loadChildren: () => import('./carrier-past-order/carrier-past-order.module').then( m => m.CarrierPastOrderPageModule)
  },
  {
    path: 'carrier-reviews',
    loadChildren: () => import('./carrier-reviews/carrier-reviews.module').then( m => m.CarrierReviewsPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapPageRoutingModule {}
