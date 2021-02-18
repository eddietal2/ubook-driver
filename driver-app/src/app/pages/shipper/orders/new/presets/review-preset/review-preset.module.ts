import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReviewPresetPageRoutingModule } from './review-preset-routing.module';

import { ReviewPresetPage } from './review-preset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReviewPresetPageRoutingModule
  ],
  declarations: [ReviewPresetPage]
})
export class ReviewPresetPageModule {}
