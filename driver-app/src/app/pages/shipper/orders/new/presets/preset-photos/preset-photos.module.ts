import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresetPhotosPageRoutingModule } from './preset-photos-routing.module';

import { PresetPhotosPage } from './preset-photos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresetPhotosPageRoutingModule
  ],
  declarations: [PresetPhotosPage]
})
export class PresetPhotosPageModule {}
