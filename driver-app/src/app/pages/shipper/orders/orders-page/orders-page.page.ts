import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.page.html',
  styleUrls: ['./orders-page.page.scss'],
})
export class OrdersPagePage implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController,

  ) { }

  ngOnInit() {
  }
  messageActiveORder() {

  }
  callActiveOrderAlert() {
    
  }
  activeOrderPage() {
    this.router.navigate(['/shipper-map'])
  }
  futureOrderPage() {
    this.router.navigate(['/shipper-future'])
  }
  editFutureOrder() {

  }
  deleteFutureOrderAlert() {

  }
}
