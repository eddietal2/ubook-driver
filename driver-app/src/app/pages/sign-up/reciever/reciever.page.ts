import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.page.html',
  styleUrls: ['./reciever.page.scss'],
})
export class RecieverPage implements OnInit {
  recieverBusinessProfileForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService) { }

  ngOnInit() {
    this.recieverBusinessProfileForm = this.formBuilder.group({
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
    this.auth.recieverSignUp.businessName = this.recieverBusinessProfileForm.controls['businessName'].value;
    this.auth.recieverSignUp.businessAddressOne = this.recieverBusinessProfileForm.controls['businessAddressOne'].value;
    this.auth.recieverSignUp.businessAddressTwo = this.recieverBusinessProfileForm.controls['businessAddressTwo'].value;
    this.auth.recieverSignUp.businessCity = this.recieverBusinessProfileForm.controls['businessCity'].value;
    this.auth.recieverSignUp.businessState = this.recieverBusinessProfileForm.controls['businessState'].value;
    this.auth.recieverSignUp.businessZip = this.recieverBusinessProfileForm.controls['businessZip'].value;
    this.auth.recieverSignUp.businessPhone = this.recieverBusinessProfileForm.controls['businessPhone'].value;
    console.log(this.auth.recieverSignUp);
    this.router.navigate(['/sign-up/reciever/logo']);
  }
  cancel() {
    this.router.navigate(['/sign-up']);
  }
  formOnChanges(): void {
    console.log(this.recieverBusinessProfileForm);
    this.recieverBusinessProfileForm.valueChanges.subscribe( data => {
       console.log(data);
    })
  }

}
