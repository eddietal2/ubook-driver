import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {
  shipperPersonalProfileForm: FormGroup;
  validationMessasges = {
    phone: [
      { type: 'phone', message: 'Please enter a valid phone # of 10 Digits'}
    ],
    email: [
      { type: 'email', message: 'Please enter a valid email.'}
    ],
  };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService) { }

  ngOnInit() {
    this.shipperPersonalProfileForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]]
    });
  }
  shipperProfilePicture() {
    this.auth.shipperSignUp.firstName = this.shipperPersonalProfileForm.controls['firstName'].value;
    this.auth.shipperSignUp.lastName = this.shipperPersonalProfileForm.controls['lastName'].value;
    this.auth.shipperSignUp.phone = this.shipperPersonalProfileForm.controls['phone'].value;
    this.auth.shipperSignUp.email = this.shipperPersonalProfileForm.controls['email'].value;

    console.log(this.auth.shipperSignUp);
    this.router.navigate(['/sign-up/shipper/picture']);
  }
  cancel() {
    this.router.navigate(['/sign-up']);
  }

}
