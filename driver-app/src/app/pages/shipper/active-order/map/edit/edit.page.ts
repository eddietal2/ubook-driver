import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  back() {
    this.router.navigate(['/shipper-map']);
  }
  inputPage(type) {
    this.router.navigate(['/edit/input', type]);
  }

}
