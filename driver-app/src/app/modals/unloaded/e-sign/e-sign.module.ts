import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ESignPageRoutingModule } from './e-sign-routing.module';

import { ESignPage } from './e-sign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ESignPageRoutingModule
  ],
  declarations: [ESignPage]
})
export class ESignPageModule {}
