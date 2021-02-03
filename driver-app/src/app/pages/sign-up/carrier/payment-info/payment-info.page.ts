import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.page.html',
  styleUrls: ['./payment-info.page.scss'],
})
export class PaymentInfoPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  skipPaymentInfo() {
    
  }
  finalizeSignUp() {
    // /sign-up/carrier/
  this.router.navigate(['/success']);
  }
  cancel() {
  this.router.navigate(['/']);
  }

}
