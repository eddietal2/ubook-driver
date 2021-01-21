import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreferredContactPage } from './preferred-contact.page';

const routes: Routes = [
  {
    path: '',
    component: PreferredContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreferredContactPageRoutingModule {}
