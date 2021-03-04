import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.page.html',
  styleUrls: ['./shipper.page.scss'],
})
export class ShipperPage implements OnInit {
  shipperBusinessProfileForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService) { }

  ngOnInit() {
    this.shipperBusinessProfileForm = this.formBuilder.group({
      businessName: ['', [Validators.required]],
      businessAddressOne: ['', [Validators.required]],
      businessAddressTwo: ['', [Validators.required]],
      businessCity: ['', [Validators.required]],
      businessState: ['', [Validators.required]],
      businessZip: ['', [Validators.required]],
      businessPhone: ['', [Validators.required]],
    });

    this.formOnChanges();

  }
  businessLogo() {
    this.auth.shipperSignUp.businessName = this.shipperBusinessProfileForm.controls['businessName'].value;
    this.auth.shipperSignUp.businessAddressOne = this.shipperBusinessProfileForm.controls['businessAddressOne'].value;
    this.auth.shipperSignUp.businessAddressTwo = this.shipperBusinessProfileForm.controls['businessAddressTwo'].value;
    this.auth.shipperSignUp.businessCity = this.shipperBusinessProfileForm.controls['businessCity'].value;
    this.auth.shipperSignUp.businessState = this.shipperBusinessProfileForm.controls['businessState'].value;
    this.auth.shipperSignUp.businessZip = this.shipperBusinessProfileForm.controls['businessZip'].value;
    this.auth.shipperSignUp.businessPhone = this.shipperBusinessProfileForm.controls['businessPhone'].value;
    console.log(this.auth.shipperSignUp);
    this.router.navigate(['/sign-up/shipper/logo']);
  }
  cancel() {
    this.router.navigate(['/sign-up']);
  }
  formOnChanges(): void {
    console.log(this.shipperBusinessProfileForm);
    this.shipperBusinessProfileForm.valueChanges.subscribe( data => {
       console.log(data);
    })
  }

}
