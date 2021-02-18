import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ESignPage } from '../../../../../modals/loaded/e-sign/e-sign.page';
import { ScaleTicketPage } from '../../../../../modals/loaded/scale-ticket/scale-ticket.page';


@Component({
  selector: 'app-loaded',
  templateUrl: './loaded.page.html',
  styleUrls: ['./loaded.page.scss'],
})
export class LoadedPage implements OnInit {
  loaded = false;
  unloaded = false;
  gotESig = false;
  gotScaleTicket = false;
  needsTicketAndSig = true;
  // TODO
  // Write logic for handling when the Shp/Rec does not require a Scale Ticket

  constructor(
    private modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {
    
  }

  async eSignModal() {
    const modal = await this.modalController.create({
      component: ESignPage,
      cssClass: 'my-custom-class'
    });
    await modal.present();
    return await modal.onDidDismiss()
      .then( (signature) => {
        console.log('Whatddup Doe');
        if(!signature.data.gotESig) {
          console.log('Did the User return an E-Signature?');
          console.log(signature.data.gotESig);
          this.gotESig = false;
        }
        if(signature.data.gotESig) {
          console.log('Did the User return an E-Signature?');
          console.log(signature.data.gotESig);
          this.gotESig = true;
        }
      })
  }
  async scaleTicketModal() {
    const modal = await this.modalController.create({
      component: ScaleTicketPage,
      cssClass: 'my-custom-class'
    });
    await modal.present();
    return await modal.onDidDismiss()
      .then( (ticket) => {
        console.log('Whatddup Doe');
        if(!ticket.data.gotScaleTicket) {
          console.log('Did the User return a Scale Ticket?');
          console.log(ticket.data.gotScaleTicket);
          this.gotScaleTicket = false;
        }
        if(ticket.data.gotScaleTicket) {
          console.log('Did the User return a Scale Ticket?');
          console.log(ticket.data.gotScaleTicket);
          this.gotScaleTicket = true;
        }
      })
  }
  submit() {
    if(this.needsTicketAndSig) {
      if(this.gotScaleTicket && this.gotESig) {
        return this.router.navigate(['/carrier-home', this.loaded]);
      }
      if(!this.gotScaleTicket || !this.gotESig) {
        console.log(this.gotScaleTicket);
        console.log(this.gotESig);
        throw Error('User does not have both an E-Signature or Scale Ticket');
      }
    }
    if(!this.needsTicketAndSig) {

    }
    this.router.navigate(['/carrier-map']);
  }
  back() {
    this.router.navigate(['/carrier-map']);
  }
}


