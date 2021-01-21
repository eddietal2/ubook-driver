import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadAppPageRoutingModule } from './download-app-routing.module';

import { DownloadAppPage } from './download-app.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadAppPageRoutingModule
  ],
  declarations: [DownloadAppPage]
})
export class DownloadAppPageModule {}
