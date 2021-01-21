import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnloadedPageRoutingModule } from './unloaded-routing.module';

import { UnloadedPage } from './unloaded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnloadedPageRoutingModule
  ],
  declarations: [UnloadedPage]
})
export class UnloadedPageModule {}
