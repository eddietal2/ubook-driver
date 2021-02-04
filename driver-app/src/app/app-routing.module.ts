import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/carrier/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },

  // Carrier Routes
  {
    path: 'carrier-profile',
    loadChildren: () => import('./pages/carrier/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'carrier-home',
    loadChildren: () => import('./pages/carrier/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'carrier-settings',
    loadChildren: () => import('./pages/carrier/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'carrier-order-page',
    loadChildren: () => import('./pages/carrier/order-page-old/order-page.module').then( m => m.OrderPagePageModule)
  },
  {
    path: 'carrier-respond-with-rate',
    loadChildren: () => import('./pages/carrier/respond-with-rate/respond-with-rate.module').then( m => m.RespondWithRatePageModule)
  },
  {
    path: 'carrier-orders',
    loadChildren: () => import('./pages/carrier/orders/orders.module').then( m => m.OrdersPageModule)
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
    path: 'shipper-orders',
    loadChildren: () => import('./pages/shipper/orders/orders.module').then( m => m.OrdersPageModule)
  },


  {
    path: 'download-app',
    loadChildren: () => import('./modals/download-app/download-app.module').then( m => m.DownloadAppPageModule)
  },
  {
    // sign up
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'picture',
    loadChildren: () => import('./modals/carrier-profile/picture/picture.module').then( m => m.PicturePageModule)
  },
  {
    path: 'name',
    loadChildren: () => import('./modals/carrier-profile/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./modals/carrier-profile/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./modals/carrier-profile/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'preferred-contact',
    loadChildren: () => import('./modals/carrier-profile/preferred-contact/preferred-contact.module').then( m => m.PreferredContactPageModule)
  },
  {
    path: 'driver-license',
    loadChildren: () => import('./modals/carrier-profile/driver-license/driver-license.module').then( m => m.DriverLicensePageModule)
  },
  {
    path: 'mc',
    loadChildren: () => import('./modals/carrier-profile/mc/mc.module').then( m => m.McPageModule)
  },
  {
    path: 'insurance',
    loadChildren: () => import('./modals/carrier-profile/insurance/insurance.module').then( m => m.InsurancePageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./modals/carrier-profile/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./modals/carrier-profile/rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./modals/shipper-profile/rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'name',
    loadChildren: () => import('./modals/shipper-profile/personal/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./modals/shipper-profile/personal/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./modals/shipper-profile/personal/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./modals/shipper-profile/personal/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'picture',
    loadChildren: () => import('./modals/shipper-profile/personal/picture/picture.module').then( m => m.PicturePageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./modals/shipper-profile/personal/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./modals/shipper-profile/business/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'logo',
    loadChildren: () => import('./modals/shipper-profile/business/logo/logo.module').then( m => m.LogoPageModule)
  },
  {
    path: 'name',
    loadChildren: () => import('./modals/shipper-profile/business/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./modals/shipper-profile/business/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./modals/shipper-profile/business/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./modals/shipper-profile/business/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./modals/reciever-profile/rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'name',
    loadChildren: () => import('./modals/reciever-profile/personal/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./modals/reciever-profile/personal/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./modals/reciever-profile/personal/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./modals/reciever-profile/personal/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./modals/reciever-profile/personal/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'picture',
    loadChildren: () => import('./modals/reciever-profile/personal/picture/picture.module').then( m => m.PicturePageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./modals/reciever-profile/business/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'logo',
    loadChildren: () => import('./modals/reciever-profile/business/logo/logo.module').then( m => m.LogoPageModule)
  },
  {
    path: 'name',
    loadChildren: () => import('./modals/reciever-profile/business/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./modals/reciever-profile/business/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'phone',
    loadChildren: () => import('./modals/reciever-profile/business/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./modals/reciever-profile/business/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/reciever/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/reciever/active-order/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'accepted',
    loadChildren: () => import('./pages/carrier/orders/accepted/accepted.module').then( m => m.AcceptedPageModule)
  },
  {
    path: 'pending',
    loadChildren: () => import('./pages/carrier/orders/pending/pending.module').then( m => m.PendingPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/reciever/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/shipper/active-order/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./pages/shipper/orders/new/new.module').then( m => m.NewPageModule)
  },
  {
    path: 'future',
    loadChildren: () => import('./pages/shipper/orders/orders-page/future/future.module').then( m => m.FuturePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/shipper/orders/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'pending',
    loadChildren: () => import('./pages/shipper/orders/pending/pending.module').then( m => m.PendingPageModule)
  },
  {
    path: 'ein',
    loadChildren: () => import('./modals/carrier-profile/ein/ein.module').then( m => m.EinPageModule)
  },
  {
    path: 'dot',
    loadChildren: () => import('./modals/carrier-profile/dot/dot.module').then( m => m.DotPageModule)
  },
  {
    path: 'orders-page',
    loadChildren: () => import('./pages/shipper/orders/orders-page/orders-page.module').then( m => m.OrdersPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
