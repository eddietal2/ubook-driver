import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pre-availability-survey',
  templateUrl: './pre-availability-survey.page.html',
  styleUrls: ['./pre-availability-survey.page.scss'],
})
export class PreAvailabilitySurveyPage implements OnInit {
  rangeValue: number;
  gas: boolean;
  safety: boolean;
  phone: boolean;

  constructor(
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.rangeValue = 200;
  }
  getRangeValue(e) {
    console.log(e);
    this.rangeValue = e.detail.value;
  }
  gasCheckbox(e) {
    console.log(e);
    if(e.detail.checked) {
      this.gas = true;
    }
    if(!e.detail.checked) {
      this.gas = false;
    }
  }
  safetyCheckbox(e) {
    console.log(e);
    if(e.detail.checked) {
      this.safety = true;
    }
    if(!e.detail.checked) {
      this.safety = false;
    }
  }
  phoneCheckbox(e) {
    console.log(e);
    if(e.detail.checked) {
      this.phone = true;
    }
    if(!e.detail.checked) {
      this.phone = false;
    }
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      data: {
        available: false
      }
    });
  }
  submit() {
    // Pass radius
    this.modalController.dismiss({
        searchRadius: this.rangeValue,
        available: true
    });
  }
}
