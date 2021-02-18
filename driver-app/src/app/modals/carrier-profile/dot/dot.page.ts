import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-dot',
  templateUrl: './dot.page.html',
  styleUrls: ['./dot.page.scss'],
})
export class DotPage implements OnInit {

  constructor(
    private modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  editDOT() {
    
  }

}
