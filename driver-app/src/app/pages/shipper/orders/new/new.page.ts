import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { NewService } from '../../../../services/orders/new.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  shipperNewOrderDetailsForm: FormGroup;
  truckType = "DRYVAN"

  constructor(
    private router: Router,
    private newService: NewService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.shipperNewOrderDetailsForm = this.formBuilder.group({
      startingRate: ['1500', [Validators.required]],
      weight: ['42000', [Validators.required]],
      loadDescription: ['Apples N Oranges', [Validators.required]],
      specialRequest: ['Wassup', [Validators.required]],
    });

    this.formOnChanges();
  }
  presets() {
    this.router.navigate(['/shipper-orders/new/presets']);
  }
  locations() {
    this.newService.newOrder.truckType = this.truckType;
    this.newService.newOrder.startingRate = this.shipperNewOrderDetailsForm.controls['startingRate'].value;
    this.newService.newOrder.weight = this.shipperNewOrderDetailsForm.controls['weight'].value;
    this.newService.newOrder.loadDescription = this.shipperNewOrderDetailsForm.controls['loadDescription'].value;
    this.newService.newOrder.specialRequest = this.shipperNewOrderDetailsForm.controls['specialRequest'].value;
    // this.NewService.newOrder.truckType = this.shipperNewOrderDetailsForm.controls['truckType'].value;
    console.log(this.newService.newOrder);
    this.router.navigate(['/shipper-orders/new/locations']);
  }
  formOnChanges(): void {
    console.log(this.shipperNewOrderDetailsForm);
    this.shipperNewOrderDetailsForm.valueChanges.subscribe( data => {
       console.log(data);
    })
  }
  truckTypeSelection(event) {
    console.log(event);
    this.truckType = event.detail.value;
  }

}
