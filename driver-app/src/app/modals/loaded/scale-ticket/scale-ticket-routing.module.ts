import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScaleTicketPage } from './scale-ticket.page';

const routes: Routes = [
  {
    path: '',
    component: ScaleTicketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScaleTicketPageRoutingModule {}
