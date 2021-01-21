import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidateAcceptPageRoutingModule } from './candidate-accept-routing.module';

import { CandidateAcceptPage } from './candidate-accept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CandidateAcceptPageRoutingModule
  ],
  declarations: [CandidateAcceptPage]
})
export class CandidateAcceptPageModule {}
