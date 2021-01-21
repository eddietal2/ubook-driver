import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreferredContactPageRoutingModule } from './preferred-contact-routing.module';

import { PreferredContactPage } from './preferred-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreferredContactPageRoutingModule
  ],
  declarations: [PreferredContactPage]
})
export class PreferredContactPageModule {}
