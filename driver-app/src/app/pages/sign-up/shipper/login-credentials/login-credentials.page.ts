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
  shipperPasswordForm: FormGroup;
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
    this.shipperPasswordForm = this.formBuilder.group({
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
    console.log(this.shipperPasswordForm);
    this.shipperPasswordForm.valueChanges
    .subscribe(
      data => {
        console.log(data);

        this.shipperPasswordForm.statusChanges.subscribe(status => {
          console.log(status);
          if ( status === 'VALID') {
            console.log('you did it bruh');
            this.passwordsMatch = true;
          }
        });

        if (this.shipperPasswordForm.controls.password.value === this.shipperPasswordForm.controls.confirmPassword.value &&
          this.shipperPasswordForm.controls.password.touched &&
          this.shipperPasswordForm.controls.email.valid) {
          console.log('Passwords Match');
      }

        if (this.shipperPasswordForm.controls.password.value !== this.shipperPasswordForm.controls.confirmPassword.value) {
        console.log('Passwords dont match');
        this.passwordsMatch = false;
    }
      }
    );
  }
  sendCodePage() {
      this.auth.shipperSignUp.password = this.shipperPasswordForm.controls.password.value;
      console.log(this.auth.shipperSignUp);
      this.router.navigate(['/sign-up/shipper/enter-code']);
    }
  cancel() {
      // this.auth.shipperSignUp = {
   
      // }
  }

}
