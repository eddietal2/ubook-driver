import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Landing App Routes
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },

  // Carrier Routes
  {
    path: 'carrier-profile',
    loadChildren: () => import('./pages/carrier/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/carrier/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'carrier-orders',
    loadChildren: () => import('./pages/carrier/orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'carrier-settings',
    loadChildren: () => import('./pages/carrier/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'carrier-order-page',
    loadChildren: () => import('./pages/carrier/order-page/order-page.module').then( m => m.OrderPagePageModule)
  },
  {
    path: 'carrier-respond-with-rate',
    loadChildren: () => import('./pages/carrier/respond-with-rate/respond-with-rate.module').then( m => m.RespondWithRatePageModule)
  },


  // Shipper Routes
  {
    path: 'shipper-profile',
    loadChildren: () => import('./pages/shipper/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'shipper-home',
    loadChildren: () => import('./pages/shipper/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'shipper-settings',
    loadChildren: () => import('./pages/shipper/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'shipper-orders',
    loadChildren: () => import('./pages/shipper/orders/orders.module').then( m => m.OrdersPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
