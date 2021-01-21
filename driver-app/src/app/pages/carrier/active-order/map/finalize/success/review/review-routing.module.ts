import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReviewPage } from './review.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewPage
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
export class ReviewPageRoutingModule {}
