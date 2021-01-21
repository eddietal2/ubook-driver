import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcceptedPage } from './accepted.page';

const routes: Routes = [
  {
    path: '',
    component: AcceptedPage
  },
  {
    path: 'finalize',
    loadChildren: () => import('./finalize/finalize.module').then( m => m.FinalizePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcceptedPageRoutingModule {}
