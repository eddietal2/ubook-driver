import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresetsPage } from './presets.page';

const routes: Routes = [
  {
    path: '',
    component: PresetsPage
  },
  {
    path: 'preset-info',
    loadChildren: () => import('./preset-info/preset-info.module').then( m => m.PresetInfoPageModule)
  },
  {
    path: 'preset-photos',
    loadChildren: () => import('./preset-photos/preset-photos.module').then( m => m.PresetPhotosPageModule)
  },
  {
    path: 'review-preset',
    loadChildren: () => import('./review-preset/review-preset.module').then( m => m.ReviewPresetPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresetsPageRoutingModule {}
