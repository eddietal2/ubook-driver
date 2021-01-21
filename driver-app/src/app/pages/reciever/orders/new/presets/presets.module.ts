import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresetsPageRoutingModule } from './presets-routing.module';

import { PresetsPage } from './presets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresetsPageRoutingModule
  ],
  declarations: [PresetsPage]
})
export class PresetsPageModule {}
