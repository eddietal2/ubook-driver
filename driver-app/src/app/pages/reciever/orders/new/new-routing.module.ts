import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPage } from './new.page';

const routes: Routes = [
  {
    path: '',
    component: NewPage
  },
  {
    path: 'presets',
    loadChildren: () => import('./presets/presets.module').then( m => m.PresetsPageModule)
  },
  {
    path: 'new-preset',
    loadChildren: () => import('./new-preset/new-preset.module').then( m => m.NewPresetPageModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./locations/locations.module').then( m => m.LocationsPageModule)
  },
  {
    path: 'photos',
    loadChildren: () => import('./photos/photos.module').then( m => m.PhotosPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./review/review.module').then( m => m.ReviewPageModule)
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
export class NewPageRoutingModule {}
