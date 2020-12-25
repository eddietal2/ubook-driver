import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiabilityPageRoutingModule } from './liability-routing.module';

import { LiabilityPage } from './liability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiabilityPageRoutingModule
  ],
  declarations: [LiabilityPage]
})
export class LiabilityPageModule {}
