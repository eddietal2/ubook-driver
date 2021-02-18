import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-scale-ticket',
  templateUrl: './scale-ticket.page.html',
  styleUrls: ['./scale-ticket.page.scss'],
})
export class ScaleTicketPage implements OnInit {
  gotScaleTicket = true;

  constructor(
    private modalController: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    if(!this.gotScaleTicket) {
      this.modalController.dismiss({
        gotScaleTicket: false,
          });
    }
    if(this.gotScaleTicket) {
      this.modalController.dismiss({
        gotScaleTicket: true,
          });
    }
  }
  getPhoto() {

  }
  submit() {
    
  }

}
