import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPresetPageRoutingModule } from './new-preset-routing.module';

import { NewPresetPage } from './new-preset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPresetPageRoutingModule
  ],
  declarations: [NewPresetPage]
})
export class NewPresetPageModule {}
