import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CandidateNegotiationPageRoutingModule } from './candidate-negotiation-routing.module';

import { CandidateNegotiationPage } from './candidate-negotiation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CandidateNegotiationPageRoutingModule
  ],
  declarations: [CandidateNegotiationPage]
})
export class CandidateNegotiationPageModule {}
