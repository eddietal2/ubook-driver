import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
  }
  cancelOrder() {
    this.router.navigate(['']);
  }
  candidatePage() {
    this.router.navigate(['/shipper-orders/pending/candidate-confirm']);
  }
  candidateNegotiationPage() {
    this.router.navigate(['/shipper-orders/pending/candidate-negotiation']);
  }


}
