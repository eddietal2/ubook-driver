import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginCredentialsPage } from './login-credentials.page';

const routes: Routes = [
  {
    path: '',
    component: LoginCredentialsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginCredentialsPageRoutingModule {}
