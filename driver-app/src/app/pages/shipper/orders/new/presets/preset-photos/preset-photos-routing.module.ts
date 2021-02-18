import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresetPhotosPage } from './preset-photos.page';

const routes: Routes = [
  {
    path: '',
    component: PresetPhotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresetPhotosPageRoutingModule {}
