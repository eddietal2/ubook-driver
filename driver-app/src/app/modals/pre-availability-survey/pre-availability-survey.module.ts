import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreAvailabilitySurveyPageRoutingModule } from './pre-availability-survey-routing.module';

import { PreAvailabilitySurveyPage } from './pre-availability-survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreAvailabilitySurveyPageRoutingModule
  ],
  declarations: [PreAvailabilitySurveyPage]
})
export class PreAvailabilitySurveyPageModule {}
