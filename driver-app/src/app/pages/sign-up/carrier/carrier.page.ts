import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.page.html',
  styleUrls: ['./carrier.page.scss'],
})
export class CarrierPage implements OnInit {
  @ViewChild(IonInput) firstInput;

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
    
  }
  profilePicture() {
    // add /sign-up/carrier
    this.router.navigate(['/picture']);
  }
  cancel() {
    this.router.navigate(['/']);
  }

}
