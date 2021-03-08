import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  type: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    const type  = this.activatedRoute.snapshot.paramMap.get('type');
    this.type = type;
  }
  submit() {
    this.router.navigate(['/edit/success']);
    setTimeout(() => {
      this.router.navigate(['/shipper-map']);
    }, 3000
    )
  }
  changePUAddress() {

  }
  changePUTime() {
    
  }
  changeDeliveryTime() {

  }
  changeDeliveryAddress() {

  }
  changeSpecialRequest() {

  }
  changeLoadDescription() {

  }

}
