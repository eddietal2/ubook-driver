import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecieverPageRoutingModule } from './reciever-routing.module';

import { RecieverPage } from './reciever.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecieverPageRoutingModule
  ],
  declarations: [RecieverPage]
})
export class RecieverPageModule {}
