import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecieverPage } from './reciever.page';

const routes: Routes = [
  {
    path: '',
    component: RecieverPage
  },
  {
    path: 'logo',
    loadChildren: () => import('./logo/logo.module').then( m => m.LogoPageModule)
  },
  {
    path: 'personal-info',
    loadChildren: () => import('./personal-info/personal-info.module').then( m => m.PersonalInfoPageModule)
  },
  {
    path: 'picture',
    loadChildren: () => import('./picture/picture.module').then( m => m.PicturePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },
  {
    path: 'login-credentials',
    loadChildren: () => import('./login-credentials/login-credentials.module').then( m => m.LoginCredentialsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecieverPageRoutingModule {}
