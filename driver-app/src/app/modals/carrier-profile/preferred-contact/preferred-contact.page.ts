import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-preferred-contact',
  templateUrl: './preferred-contact.page.html',
  styleUrls: ['./preferred-contact.page.scss'],
})
export class PreferredContactPage implements OnInit {

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

}
