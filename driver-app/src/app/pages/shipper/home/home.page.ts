import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  pendingOrdersAmount;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  newOrder() {
    this.router.navigate(['/shipper-orders/new']);
  }
  shipperProfile() {
    this.router.navigate(['/shipper-profile']);
  }
  pendingOrders() {
    this.router.navigate(['/shipper-orders/pending']);
  }
  activeOrder() {
    this.router.navigate(['/shipper-map']);
  }
  futureOrder() {
    this.router.navigate(['/shipper-future']);
  }
  deleteFutureOrderAlert() {
    
  }
  editFutureOrder() {

  }
  deleteActiveOrderAlert() {
    
  }
  editActiveOrder() {

  }


}
