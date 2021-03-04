import { Component, OnInit, ViewChild } from '@angular/core';
import { IonCheckbox, IonInput } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.page.html',
  styleUrls: ['./carrier.page.scss'],
})
export class CarrierPage implements OnInit {
  @ViewChild(IonInput) firstInput;
  @ViewChild('noPC') noPC: IonCheckbox;
  @ViewChild('yesPC') yesPC: IonCheckbox;
  @ViewChild('noOO') noOO: IonCheckbox;
  @ViewChild('yesOO') yesOO: IonCheckbox;
  carrierProfileForm: FormGroup;
  preferredContact = false;
  ownerOperator = false;
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
    private auth: AuthService,
    ) { }

  ngOnInit() {
    this.carrierProfileForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      preferredContactNumber: [''],
      mc: ['', [Validators.required, Validators.email]],
      ein: ['', [Validators.required, Validators.email]],
      dot: ['', [Validators.required, Validators.email]],
    })

    // this.carrierProfileForm.valueChanges.subscribe((data) => {
    //   console.log(data);

    // });
  }
  profilePicturePage() {
    this.auth.carrierSignUp.firstName = this.carrierProfileForm.controls['firstName'].value;
    this.auth.carrierSignUp.lastName = this.carrierProfileForm.controls['lastName'].value;
    this.auth.carrierSignUp.email = this.carrierProfileForm.controls['email'].value;
    this.auth.carrierSignUp.phone = this.carrierProfileForm.controls['phone'].value;
    this.auth.carrierSignUp.preferredContact = this.preferredContact;
    this.auth.carrierSignUp.preferredContactNumber = this.carrierProfileForm.controls['preferredContactNumber'].value;
    this.auth.carrierSignUp.ownerOperator = this.ownerOperator;
    this.auth.carrierSignUp.mc = this.carrierProfileForm.controls['mc'].value;
    this.auth.carrierSignUp.ein = this.carrierProfileForm.controls['ein'].value;
    this.auth.carrierSignUp.dot = this.carrierProfileForm.controls['dot'].value;
    this.router.navigate(['/sign-up/carrier/picture']);
    console.log(this.auth.carrierSignUp);
  }
  preferredContactOption(e) {
    let checkboxData = e.detail;
    console.log(this.noPC.checked);
    console.log(this.yesPC.checked);
    console.log(checkboxData);
    // if no box is checked
    // yes box should be unchecked
    if(checkboxData.value === 'no' && checkboxData.checked) {
      console.log('NO Preferred Contact!');
      this.preferredContact = true;
      this.yesPC.checked = false;
    }
    // if yes box is checked
    // no box should be unchecked
    if(checkboxData.value === 'yes' && checkboxData.checked) {
      console.log('YES Preferred Contact!');
      this.preferredContact = false;
      this.noPC.checked = false;
    }
  }
  ownerOperatorOption(e) {
    let checkboxData = e.detail;
    console.log(this.noOO.checked);
    console.log(this.yesOO.checked);
    console.log(checkboxData);
    // if no box is checked
    // yes box should be unchecked
    if(checkboxData.value === 'no' && checkboxData.checked) {
      console.log('NO Owner Operator!');
      this.ownerOperator = false;
      this.yesOO.checked = false;
    }
    // if yes box is checked
    // no box should be unchecked
    if(checkboxData.value === 'yes' && checkboxData.checked) {
      console.log('YES Owner Operator!');
      this.ownerOperator = true;
      this.noOO.checked = false;
    }
  }
  cancel() {
    this.router.navigate(['/sign-up']);
  }

}
