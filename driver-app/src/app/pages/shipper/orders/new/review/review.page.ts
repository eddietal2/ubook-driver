import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  rangeValue: number;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor(
    private router: Router) { }

  ngOnInit() {
    // Initial Ion Range - Border Radius Value
    this.rangeValue = 200;
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
    // TODO
    // Refresh entire New Order Section, and re route to first new order page shipper-orders/new
    // Toast saying that you have cancelled this new order
  }
  getRangeValue(e) {
    console.log(e);
    this.rangeValue = e.detail.value;
  }

}
