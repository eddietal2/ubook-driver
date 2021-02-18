import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-e-sign',
  templateUrl: './e-sign.page.html',
  styleUrls: ['./e-sign.page.scss'],
})
export class ESignPage implements OnInit {
  gotESig = true

  constructor(
    private modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    if(!this.gotESig) {
      this.modalController.dismiss({
        gotESig: false,
          });
    }
    if(this.gotESig) {
      this.modalController.dismiss({
        gotESig: true,
          });
    }
  }
  getSig() {

  }
  submit() {
    
  }

}
