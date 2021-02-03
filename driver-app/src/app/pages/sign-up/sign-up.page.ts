import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  carrier() {
    this.router.navigate(['/sign-up/carrier']);
  }
  shipper() {
    this.router.navigate(['/sign-up/shipper']);
  }
  reciever() {
    this.router.navigate(['/sign-up/reciever']);
  }
  cancel() {
    this.router.navigate(['/']);
  }

}
