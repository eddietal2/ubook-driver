import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapPage } from './map.page';

const routes: Routes = [
  {
    path: '',
    component: MapPage
  },
  {
    path: 'cancel',
    loadChildren: () => import('./cancel/cancel.module').then( m => m.CancelPageModule)
  },
  {
    path: 'carrier-history',
    loadChildren: () => import('./carrier-history/carrier-history.module').then( m => m.CarrierHistoryPageModule)
  },
  {
    path: 'carrier-info',
    loadChildren: () => import('./carrier-info/carrier-info.module').then( m => m.CarrierInfoPageModule)
  },
  {
    path: 'carrier-past-order',
    loadChildren: () => import('./carrier-past-order/carrier-past-order.module').then( m => m.CarrierPastOrderPageModule)
  },
  {
    path: 'carrier-past-reviews',
    loadChildren: () => import('./carrier-past-reviews/carrier-past-reviews.module').then( m => m.CarrierPastReviewsPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./messages/messages.module').then( m => m.MessagesPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapPageRoutingModule {}
