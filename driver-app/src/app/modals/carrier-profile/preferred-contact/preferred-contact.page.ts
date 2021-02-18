import { Component, OnInit } from '@angular/core';
import { IonToggle, ModalController } from '@ionic/angular';



@Component({
  selector: 'app-preferred-contact',
  templateUrl: './preferred-contact.page.html',
  styleUrls: ['./preferred-contact.page.scss'],
})
export class PreferredContactPage implements OnInit {
  contactToggle: boolean;

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
  toggle(event) {
    console.log(event);
    if(event.detail.checked) {
      console.log('CHECKED!');
      this.contactToggle = true;
    }
    if(!event.detail.checked) {
      console.log('UNCHECKED!');
      this.contactToggle = false;
    }
  }
  editPreferredContact() {
    console.log('Attempting to edit preferred contact ...');
  }

}
