import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-candidate-accept',
  templateUrl: './candidate-accept.page.html',
  styleUrls: ['./candidate-accept.page.scss'],
})
export class CandidateAcceptPage implements OnInit {

  constructor(
    private router: Router,
    private toastController: ToastController,
    ) { }

  ngOnInit() {
  }
  back() {
    // Get Order ID to put as a Param in route?
    this.router.navigate(['']);
  }
  acceptCandidate() {
    this.router.navigate(['/shipper-orders/pending/success']);
  }
  cancelCandidate() {
    // this.router.navigate(['/candidate-accept']);
  }
  async Toast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

}
