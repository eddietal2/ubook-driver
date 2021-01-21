import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadAppPage } from './download-app.page';

const routes: Routes = [
  {
    path: '',
    component: DownloadAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloadAppPageRoutingModule {}
