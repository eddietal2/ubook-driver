import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrierPage } from './carrier.page';

const routes: Routes = [
  {
    path: '',
    component: CarrierPage
  },
  {
    path: 'picture',
    loadChildren: () => import('./picture/picture.module').then( m => m.PicturePageModule)
  },
  {
    path: 'payment-info',
    loadChildren: () => import('./payment-info/payment-info.module').then( m => m.PaymentInfoPageModule)
  },
  {
    path: 'driver-info',
    loadChildren: () => import('./driver-info/driver-info.module').then( m => m.DriverInfoPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrierPageRoutingModule {}
