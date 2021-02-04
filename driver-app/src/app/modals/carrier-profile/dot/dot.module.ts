import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DotPageRoutingModule } from './dot-routing.module';

import { DotPage } from './dot.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DotPageRoutingModule
  ],
  declarations: [DotPage]
})
export class DotPageModule {}
