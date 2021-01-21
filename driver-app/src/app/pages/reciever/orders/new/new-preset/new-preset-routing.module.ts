import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPresetPage } from './new-preset.page';

const routes: Routes = [
  {
    path: '',
    component: NewPresetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPresetPageRoutingModule {}
