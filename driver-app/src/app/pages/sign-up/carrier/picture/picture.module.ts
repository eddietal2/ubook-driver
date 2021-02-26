import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicturePageRoutingModule } from './picture-routing.module';

import { PicturePage } from './picture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PicturePageRoutingModule
  ],
  declarations: [PicturePage]
})
export class PicturePageModule {}
