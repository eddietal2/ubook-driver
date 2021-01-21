import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { McPageRoutingModule } from './mc-routing.module';

import { McPage } from './mc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    McPageRoutingModule
  ],
  declarations: [McPage]
})
export class McPageModule {}
