import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginCredentialsPageRoutingModule } from './login-credentials-routing.module';

import { LoginCredentialsPage } from './login-credentials.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginCredentialsPageRoutingModule
  ],
  declarations: [LoginCredentialsPage]
})
export class LoginCredentialsPageModule {}
