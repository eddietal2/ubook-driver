import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  shipperProfilePicture() {
    this.router.navigate(['/sign-up/shipper/picture']);
  }
  cancel() {
    this.router.navigate(['/sign-up']);
  }

}
