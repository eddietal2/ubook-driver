import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.page.html',
  styleUrls: ['./reciever.page.scss'],
})
export class RecieverPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  logo() {
    // add /sign-up/carrier
    this.router.navigate(['/sign-up/reciever/logo']);
  }
  cancel() {
    this.router.navigate(['/sign-up']);
  }

}
