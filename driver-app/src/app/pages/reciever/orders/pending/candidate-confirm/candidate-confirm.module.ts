import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidateConfirmPageRoutingModule } from './candidate-confirm-routing.module';

import { CandidateConfirmPage } from './candidate-confirm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidateConfirmPageRoutingModule
  ],
  declarations: [CandidateConfirmPage]
})
export class CandidateConfirmPageModule {}
