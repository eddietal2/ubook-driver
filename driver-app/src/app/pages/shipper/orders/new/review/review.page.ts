import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  success() {
    this.router.navigate(['/shipper-orders/new/success']);
  }
  editOrderDetails() {
    this.router.navigate(['/shipper-orders/new']);
  }
  editPhotos() {
    this.router.navigate(['/shipper-orders/new/photos']);
  }
  editLocation() {
    this.router.navigate(['/shipper-orders/new/locations']);
  }
  cancelOrder() {
    // Refresh entire New Order Section, and re route to first new order page shipper-orders/new
  }

}
