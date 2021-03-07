import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NewService } from '../../../../../services/orders/new.service';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  shipperNewOrderLocationsForm: FormGroup;

  constructor(
    private router: Router,
    private newService: NewService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.shipperNewOrderLocationsForm = this.formBuilder.group({
      PUDate: ['2021-03-07T07:00:54.580-05:00', [Validators.required]],
      PUAddressOne: ['123 Pick Blvd', [Validators.required]],
      PUAddressTwo: ['102', [Validators.required]],
      PUCity: ['Detroit', [Validators.required]],
      PUState: ['MI', [Validators.required]],
      PUZip: ['48202', [Validators.required]],
      DLDate: ['2021-03-07T07:00:54.580-05:00', [Validators.required]],
      DLAddressOne: ['456 Delivery Ave', [Validators.required]],
      DLAddressTwo: ['231', [Validators.required]],
      DLCity: ['Detroit', [Validators.required]],
      DLState: ['MI', [Validators.required]],
      DLZip: ['48223', [Validators.required]],
    });

    this.formOnChanges();
  }
  photos() {
    this.newService.newOrder.PUDate = this.shipperNewOrderLocationsForm.controls['PUDate'].value;
    this.newService.newOrder.PUAddressOne = this.shipperNewOrderLocationsForm.controls['PUAddressOne'].value;
    this.newService.newOrder.PUAddressTwo = this.shipperNewOrderLocationsForm.controls['PUAddressTwo'].value;
    this.newService.newOrder.PUCity = this.shipperNewOrderLocationsForm.controls['PUCity'].value;
    this.newService.newOrder.PUState = this.shipperNewOrderLocationsForm.controls['PUState'].value;
    this.newService.newOrder.PUZip = this.shipperNewOrderLocationsForm.controls['PUZip'].value;
    this.newService.newOrder.DLDate = this.shipperNewOrderLocationsForm.controls['DLDate'].value;
    this.newService.newOrder.DLAddressOne = this.shipperNewOrderLocationsForm.controls['DLAddressOne'].value;
    this.newService.newOrder.DLAddressTwo = this.shipperNewOrderLocationsForm.controls['DLAddressTwo'].value;
    this.newService.newOrder.DLCity = this.shipperNewOrderLocationsForm.controls['DLCity'].value;
    this.newService.newOrder.DLState = this.shipperNewOrderLocationsForm.controls['DLState'].value;
    this.newService.newOrder.DLZip = this.shipperNewOrderLocationsForm.controls['DLZip'].value;

    console.log(this.newService.newOrder);
    this.router.navigate(['/shipper-orders/new/photos']);
  }
  formOnChanges(): void {
    console.log(this.shipperNewOrderLocationsForm);
    this.shipperNewOrderLocationsForm.valueChanges.subscribe( data => {
       console.log(data);
    })
  }

}
