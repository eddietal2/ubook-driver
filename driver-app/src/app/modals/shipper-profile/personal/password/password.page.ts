import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  shipperEditPasswordForm: FormGroup;
  passwordsMatch = false;
  validationMessasges = {
    password: [
      { type: 'password', message: 'Please enter a valid password. At least 1 number, 1 uppercase letter, and one lowercase letter, and 8 characters long'}
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private modalController: ModalController) { }

  ngOnInit() {
    this.shipperEditPasswordForm = this.formBuilder.group({
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])],
      newPassword: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // at least 1 number, 1 uppercase letter, and one lowercase letter
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])],
     confirmNewPassword: ['', Validators.compose([
      Validators.minLength(8),
      Validators.required,
      // at least 1 number, 1 uppercase letter, and one lowercase letter
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
   ])]
    });
    this.formOnChanges();
  }
  formOnChanges(): void {
    console.log(this.shipperEditPasswordForm);
    this.shipperEditPasswordForm.valueChanges
    .subscribe(
      data => {
        console.log(data);

        this.shipperEditPasswordForm.statusChanges.subscribe(status => {
          console.log(status);
          if ( status === 'VALID') {
            console.log('you did it bruh');
            this.passwordsMatch = true;
          }
        });

        if (this.shipperEditPasswordForm.controls.newPassword.value === this.shipperEditPasswordForm.controls.confirmNewPassword.value &&
          this.shipperEditPasswordForm.controls.newPassword.touched &&
          this.shipperEditPasswordForm.controls.email.valid) {
          console.log('Passwords Match');
      }

        if (this.shipperEditPasswordForm.controls.newPassword.value !== this.shipperEditPasswordForm.controls.confirmNewPassword.value) {
        console.log('Passwords dont match');
        this.passwordsMatch = false;
    }
      }
    );
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
