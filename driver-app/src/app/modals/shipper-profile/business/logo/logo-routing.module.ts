import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessLogoPage } from './logo.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessLogoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogoPageRoutingModule {}
