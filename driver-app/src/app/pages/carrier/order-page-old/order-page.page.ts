import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.page.html',
  styleUrls: ['./order-page.page.scss'],
})
export class OrderPagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  respondWithRate() {
    // pass order id to params
    this.router.navigate(['carrier-respond-with-rate'])
  }

}
