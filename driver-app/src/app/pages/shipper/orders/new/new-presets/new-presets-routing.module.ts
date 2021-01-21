import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPresetsPage } from './new-presets.page';

const routes: Routes = [
  {
    path: '',
    component: NewPresetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPresetsPageRoutingModule {}
