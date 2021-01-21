import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScaleTicketPageRoutingModule } from './scale-ticket-routing.module';

import { ScaleTicketPage } from './scale-ticket.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScaleTicketPageRoutingModule
  ],
  declarations: [ScaleTicketPage]
})
export class ScaleTicketPageModule {}
