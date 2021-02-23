import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
})
export class PendingPage implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController,) { }

  ngOnInit() {
  }
  deleteAcceptedOrderAlert() {

  }
  editAcceptedOrder() {

  }
  acceptedOrderPage() {

  }
  deletePendingOrderAlert() {

  }
  editPendingOrder() {

  }
  pendingOrderPage() {
    this.router.navigate(['/shipper-orders/pending/details'])
  }

}
