import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersPage } from './orders.page';
import { OrdersPageRoutingModule } from './orders-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersPageRoutingModule,
  ],
  declarations: [OrdersPage]
})
export class OrdersPageModule {}
