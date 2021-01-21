import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadedPageRoutingModule } from './loaded-routing.module';

import { LoadedPage } from './loaded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadedPageRoutingModule
  ],
  declarations: [LoadedPage]
})
export class LoadedPageModule {}
