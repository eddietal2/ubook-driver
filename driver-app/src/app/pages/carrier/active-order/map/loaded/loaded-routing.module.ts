import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadedPage } from './loaded.page';

const routes: Routes = [
  {
    path: '',
    component: LoadedPage
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
export class LoadedPageRoutingModule {}
