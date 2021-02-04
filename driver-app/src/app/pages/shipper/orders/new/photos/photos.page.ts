import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  review()  {
    this.router.navigate(['/shipper-orders/new/review']);
  }

}
