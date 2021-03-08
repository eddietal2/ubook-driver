import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.page.html',
  styleUrls: ['./cancel.page.scss'],
})
export class CancelPage implements OnInit {

  constructor(
    private router: Router
  ) { }
  ngOnInit() {
  }
  confirmCancelPage(type) {
    this.router.navigate(['/cancel/confirm', type]);
  }
  back() {
    this.router.navigate(['/shipper-mar']);
  }

}
