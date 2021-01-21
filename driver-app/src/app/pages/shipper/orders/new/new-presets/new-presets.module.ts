import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPresetsPageRoutingModule } from './new-presets-routing.module';

import { NewPresetsPage } from './new-presets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPresetsPageRoutingModule
  ],
  declarations: [NewPresetsPage]
})
export class NewPresetsPageModule {}
