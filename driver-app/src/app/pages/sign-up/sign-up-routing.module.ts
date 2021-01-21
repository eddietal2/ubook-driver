import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPage } from './sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPage
  },
  {
    path: 'carrier',
    loadChildren: () => import('./carrier/carrier.module').then( m => m.CarrierPageModule)
  },
  {
    path: 'shipper',
    loadChildren: () => import('./shipper/shipper.module').then( m => m.ShipperPageModule)
  },
  {
    path: 'reciever',
    loadChildren: () => import('./reciever/reciever.module').then( m => m.RecieverPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPageRoutingModule {}
