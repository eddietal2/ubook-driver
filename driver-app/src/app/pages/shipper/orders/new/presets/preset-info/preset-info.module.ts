import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresetInfoPageRoutingModule } from './preset-info-routing.module';

import { PresetInfoPage } from './preset-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresetInfoPageRoutingModule
  ],
  declarations: [PresetInfoPage]
})
export class PresetInfoPageModule {}
