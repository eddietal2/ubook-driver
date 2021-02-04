import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EinPageRoutingModule } from './ein-routing.module';

import { EinPage } from './ein.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EinPageRoutingModule
  ],
  declarations: [EinPage]
})
export class EinPageModule {}
