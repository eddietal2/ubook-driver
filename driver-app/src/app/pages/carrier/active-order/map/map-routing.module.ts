import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapPage } from './map.page';

const routes: Routes = [
  {
    path: '',
    component: MapPage
  },
  {
    path: 'finalize',
    loadChildren: () => import('./finalize/finalize.module').then( m => m.FinalizePageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'cancel',
    loadChildren: () => import('./cancel/cancel.module').then( m => m.CancelPageModule)
  },
  {
    path: 'loaded',
    loadChildren: () => import('./loaded/loaded.module').then( m => m.LoadedPageModule)
  },
  {
    path: 'unloaded',
    loadChildren: () => import('./unloaded/unloaded.module').then( m => m.UnloadedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapPageRoutingModule {}
