import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login-credentials',
  templateUrl: './login-credentials.page.html',
  styleUrls: ['./login-credentials.page.scss'],
})
export class LoginCredentialsPage implements OnInit {
  carrierPasswordForm: FormGroup;
  passwordsMatch = false;
  validationMessasges = {
    password: [
      { type: 'password', message: 'Please enter a valid password. At least 1 number, 1 uppercase letter, and one lowercase letter, and 8 characters long'}
    ]
  };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService) { }

  ngOnInit() {
    this.carrierPasswordForm = this.formBuilder.group({
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])],
     confirmPassword: ['', Validators.compose([
      Validators.minLength(8),
      Validators.required,
      // at least 1 number, 1 uppercase letter, and one lowercase letter
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
   ])]
    });
    this.formOnChanges();
  }


  formOnChanges(): void {
    console.log(this.carrierPasswordForm);
    this.carrierPasswordForm.valueChanges
    .subscribe(
      data => {
        console.log(data);

        this.carrierPasswordForm.statusChanges.subscribe(status => {
          console.log(status);
          if ( status === 'VALID') {
            console.log('you did it bruh');
            this.passwordsMatch = true;
          }
        });

        if (this.carrierPasswordForm.controls.password.value === this.carrierPasswordForm.controls.confirmPassword.value &&
          this.carrierPasswordForm.controls.password.touched &&
          this.carrierPasswordForm.controls.email.valid) {
          console.log('Passwords Match');
      }

        if (this.carrierPasswordForm.controls.password.value !== this.carrierPasswordForm.controls.confirmPassword.value) {
        console.log('Passwords dont match');
        this.passwordsMatch = false;
    }
      }
    );
  }
  sendCodePage() {
      this.auth.carrierSignUp.password = this.carrierPasswordForm.controls.password.value;
      console.log(this.auth.carrierSignUp);
      
      this.router.navigate(['/sign-up/carrier/enter-code']);
    }
  cancel() {
      // this.auth.carrierSignUp = {
      //   firstName: '',
      //   lastName: '',
      //   email: '',
      //   phone: '',
      //   preferredContact: false,
      //   preferredContactNumber: '',
      //   ownerOperator: false,
      //   mc: '',
      //   ein: '',
      //   dot: '',
      //   profilePicture: '',
      //   driverLicenseNumber: '',
      //   driverLicenseState: '',
      //   driverLicenseFrontPhoto: '',
      //   driverLicenseBackPhoto: '',
      //   stripeToken: '',
      //   password: ''
      // }
  }

}
