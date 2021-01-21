import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresetsPage } from './presets.page';

const routes: Routes = [
  {
    path: '',
    component: PresetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresetsPageRoutingModule {}
