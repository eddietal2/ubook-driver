import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/carrier/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },

  {
    path: 'download-app',
    loadChildren: () => import('./modals/download-app/download-app.module').then( m => m.DownloadAppPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
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
    path: 'carrier-map',
    loadChildren: () => import('./pages/carrier/active-order/map/map.module').then( m => m.MapPageModule)
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
  {
    path: 'carrier-picture',
    loadChildren: () => import('./modals/carrier-profile/picture/picture.module').then( m => m.PicturePageModule)
  },
  {
    path: 'carrier-name',
    loadChildren: () => import('./modals/carrier-profile/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'carrier-email',
    loadChildren: () => import('./modals/carrier-profile/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'carrier-phone',
    loadChildren: () => import('./modals/carrier-profile/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'carrier-preferred-contact',
    loadChildren: () => import('./modals/carrier-profile/preferred-contact/preferred-contact.module').then( m => m.PreferredContactPageModule)
  },
  {
    path: 'carrier-driver-license',
    loadChildren: () => import('./modals/carrier-profile/driver-license/driver-license.module').then( m => m.DriverLicensePageModule)
  },
  {
    path: 'carrier-mc',
    loadChildren: () => import('./modals/carrier-profile/mc/mc.module').then( m => m.McPageModule)
  },
  {
    path: 'carrier-insurance',
    loadChildren: () => import('./modals/carrier-profile/insurance/insurance.module').then( m => m.InsurancePageModule)
  },
  {
    path: 'carrier-password',
    loadChildren: () => import('./modals/carrier-profile/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'carrier-rating',
    loadChildren: () => import('./modals/carrier-profile/rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'carrier-accepted',
    loadChildren: () => import('./pages/carrier/orders/accepted/accepted.module').then( m => m.AcceptedPageModule)
  },
  {
    path: 'carrier-pending',
    loadChildren: () => import('./pages/carrier/orders/pending/pending.module').then( m => m.PendingPageModule)
  },
  {
    path: 'carrier-ein',
    loadChildren: () => import('./modals/carrier-profile/ein/ein.module').then( m => m.EinPageModule)
  },
  {
    path: 'carrier-dot',
    loadChildren: () => import('./modals/carrier-profile/dot/dot.module').then( m => m.DotPageModule)
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
    path: 'shipper-rating',
    loadChildren: () => import('./modals/shipper-profile/rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'shipper-name',
    loadChildren: () => import('./modals/shipper-profile/personal/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'shipper-location',
    loadChildren: () => import('./modals/shipper-profile/personal/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'shipper-email',
    loadChildren: () => import('./modals/shipper-profile/personal/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'shipper-phone',
    loadChildren: () => import('./modals/shipper-profile/personal/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'shipper-picture',
    loadChildren: () => import('./modals/shipper-profile/personal/picture/picture.module').then( m => m.PicturePageModule)
  },
  {
    path: 'shipper-password',
    loadChildren: () => import('./modals/shipper-profile/personal/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'shipper-payment',
    loadChildren: () => import('./modals/shipper-profile/business/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'shipper-logo',
    loadChildren: () => import('./modals/shipper-profile/business/logo/logo.module').then( m => m.LogoPageModule)
  },
  { 
    path: 'shipper-name',
    loadChildren: () => import('./modals/shipper-profile/business/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'shipper-location',
    loadChildren: () => import('./modals/shipper-profile/business/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'shipper-phone',
    loadChildren: () => import('./modals/shipper-profile/business/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'shipper-email',
    loadChildren: () => import('./modals/shipper-profile/business/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'shipper-map',
    loadChildren: () => import('./pages/shipper/active-order/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'shipper-new',
    loadChildren: () => import('./pages/shipper/orders/new/new.module').then( m => m.NewPageModule)
  },
  {
    path: 'shipper-future',
    loadChildren: () => import('./pages/shipper/orders/orders-page/future/future.module').then( m => m.FuturePageModule)
  },
  {
    path: 'shipper-history',
    loadChildren: () => import('./pages/shipper/orders/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'shipper-pending',
    loadChildren: () => import('./pages/shipper/orders/pending/pending.module').then( m => m.PendingPageModule)
  },
  {
    path: 'shipper-orders-page',
    loadChildren: () => import('./pages/shipper/orders/orders-page/orders-page.module').then( m => m.OrdersPagePageModule)
  },


  // Reciever Routes
  {
    path: 'reciever-rating',
    loadChildren: () => import('./modals/reciever-profile/rating/rating.module').then( m => m.RatingPageModule)
  },
  {
    path: 'reciever-name',
    loadChildren: () => import('./modals/reciever-profile/personal/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'reciever-email',
    loadChildren: () => import('./modals/reciever-profile/personal/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'reciever-phone',
    loadChildren: () => import('./modals/reciever-profile/personal/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'reciever-password',
    loadChildren: () => import('./modals/reciever-profile/personal/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'reciever-location',
    loadChildren: () => import('./modals/reciever-profile/personal/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'reciever-picture',
    loadChildren: () => import('./modals/reciever-profile/personal/picture/picture.module').then( m => m.PicturePageModule)
  },
  {
    path: 'reciever-payment',
    loadChildren: () => import('./modals/reciever-profile/business/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'reciever-logo',
    loadChildren: () => import('./modals/reciever-profile/business/logo/logo.module').then( m => m.LogoPageModule)
  },
  {
    path: 'reciever-name',
    loadChildren: () => import('./modals/reciever-profile/business/name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'reciever-location',
    loadChildren: () => import('./modals/reciever-profile/business/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'reciever-phone',
    loadChildren: () => import('./modals/reciever-profile/business/phone/phone.module').then( m => m.PhonePageModule)
  },
  {
    path: 'reciever-email',
    loadChildren: () => import('./modals/reciever-profile/business/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'reciever-home',
    loadChildren: () => import('./pages/reciever/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'reciever-map',
    loadChildren: () => import('./pages/reciever/active-order/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'reciver-profile',
    loadChildren: () => import('./pages/reciever/profile/profile.module').then( m => m.ProfilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy',
      enableTracing: false })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
