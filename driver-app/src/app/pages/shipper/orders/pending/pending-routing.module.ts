import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingPage } from './pending.page';

const routes: Routes = [
  {
    path: '',
    component: PendingPage
  },
  {
    path: 'cancel',
    loadChildren: () => import('./cancel/cancel.module').then( m => m.CancelPageModule)
  },
  {
    path: 'candidate',
    loadChildren: () => import('./candidate/candidate.module').then( m => m.CandidatePageModule)
  },
  {
    path: 'candidate-accept',
    loadChildren: () => import('./candidate-accept/candidate-accept.module').then( m => m.CandidateAcceptPageModule)
  },
  {
    path: 'candidate-confirm',
    loadChildren: () => import('./candidate-confirm/candidate-confirm.module').then( m => m.CandidateConfirmPageModule)
  },
  {
    path: 'candidate-negotiation',
    loadChildren: () => import('./candidate-negotiation/candidate-negotiation.module').then( m => m.CandidateNegotiationPageModule)
  },
  {
    path: 'candidate-reviews',
    loadChildren: () => import('./candidate-reviews/candidate-reviews.module').then( m => m.CandidateReviewsPageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then( m => m.EditPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingPageRoutingModule {}
