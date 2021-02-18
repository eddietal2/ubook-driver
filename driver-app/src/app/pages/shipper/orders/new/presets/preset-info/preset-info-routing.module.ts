import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresetInfoPage } from './preset-info.page';

const routes: Routes = [
  {
    path: '',
    component: PresetInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresetInfoPageRoutingModule {}
