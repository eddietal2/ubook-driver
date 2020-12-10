import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPage } from './sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPage
  },
  {
    path: 'enter-code-carrier/:usertype/:phone/:email',
    loadChildren: () => import('./enter-code-carrier/enter-code-carrier.module').then( m => m.EnterCodeCarrierPageModule)
  },
  {
    path: 'enter-code-shipper/:usertype/:phone/:email',
    loadChildren: () => import('./enter-code-shipper/enter-code-shipper.module').then( m => m.EnterCodeShipperPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpPageRoutingModule {}
