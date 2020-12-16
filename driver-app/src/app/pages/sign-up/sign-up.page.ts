import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,
  ReactiveFormsModule } from '@angular/forms';
import { AlertController, IonButton, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  registerCarrierForm: FormGroup;
  registerShipperForm: FormGroup;
  passwordsMatch = false;
  usertype: string;
  carrierButton;
  shipperButton;

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 8 characters with at least one uppercase character, and one number.'}
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
    this.carrierButton = document.querySelector('carrier-button');
    this.shipperButton = document.querySelector('shipper-button');
    this.registerCarrierForm = this.formBuilder.group({
      first: ['Eddie', [Validators.required]],
      last: ['Taliaferro', [Validators.required]],
      phone: ['7342237792', [Validators.required]],
      insurance: ['Insurance', [Validators.required]],
      email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
      password: ['Lacrosse2', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])],
      reEnterPassword: ['Lacrosse2', Validators.compose([
        Validators.minLength(6),
        Validators.required,
        // this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])]
    });

    this.registerShipperForm = this.formBuilder.group({
      first: ['Eddie', [Validators.required]],
      last: ['Taliaferro', [Validators.required]],
      phone: ['7342237792', [Validators.required]],
      email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
      password: ['Lacrosse2', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])],
      reEnterPassword: ['Lacrosse2', Validators.compose([
        Validators.minLength(6),
        Validators.required,
        // this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])]
    });

    this.formOnChangesCarrier();
    this.formOnChangesShipper();
  }

  // Refactor to check for Carrier or Shipper collections
  checkEmailAndPhone() {
    // tslint:disable-next-line: max-line-length
    if (this.usertype === 'Carrier') {
      console.log('Registering a Carrier ...');
      console.log(this.registerCarrierForm.value);
      // tslint:disable-next-line: max-line-length
      this.registerService.checkEmailAndPhoneCarrier(this.registerCarrierForm.controls.email.value, 1 + this.registerCarrierForm.controls.phone.value)
      .pipe(
        tap(res => {
          console.log(res);
        }),
        catchError(e => {
          console.error(e.error);
          if (e.error.msg === 'There is already a Carrier registered with that Phone Number') {
            this.presentAlert('Phone Number Invalid', 'There is already a Carrier registered with that Email address. Please try again with another phone number.');
          }
          if (e.error.msg === 'There is already a Carrier registered with the Email Address') {
            this.presentAlert('Email Address Invalid', 'There is already a Carrier registered with that Email address. Please try again with another email.');
          }
          throw new Error(e);
        })
      )
      .subscribe(
      data => {
        // tslint:disable-next-line: max-line-length
        this.registerService.newCarrier.name = this.registerCarrierForm.controls.first.value + ' ' + this.registerCarrierForm.controls.last.value;

        this.registerService.newCarrier.email = this.registerCarrierForm.controls.email.value;

        this.registerService.newCarrier.phone = '1' + this.registerCarrierForm.controls.phone.value;

        this.registerService.newCarrier.insurance = this.registerCarrierForm.controls.insurance.value;

        this.registerService.newCarrier.password = this.registerCarrierForm.controls.password.value;

        console.log(this.registerService.newCarrier);

        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/sign-up/enter-code-carrier', this.usertype, '1' + this.registerCarrierForm.controls.phone.value, this.registerCarrierForm.controls.email.value
        ]);
      });
    }
    if (this.usertype === 'Shipper') {
      console.log('Registering a Shipper ...');
      console.log(this.registerShipperForm.value);
      // tslint:disable-next-line: max-line-length
      this.registerService.checkEmailAndPhoneShipper(this.registerShipperForm.controls.email.value, 1 + this.registerShipperForm.controls.phone.value)
      .pipe(
        tap(res => {
          console.log(res);
        }),
        catchError(e => {
          console.error(e.error);
          if (e.error.msg === 'There is already a Shipper registered with that Phone Number') {
            this.presentAlert('Phone Number Invalid', 'There is already a Shipper registered with that Email address. Please try again with another phone number.');
          }
          if (e.error.msg === 'There is already a Shipper registered with the Email Address') {
            this.presentAlert('Email Address Invalid', 'There is already a Shipper registered with that Email address. Please try again with another email.');
          }
          throw new Error(e);
        })
      )
      .subscribe(
      data => {
        // Refactor to go to specific enter-code pages for each usertype
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/sign-up/enter-code-shipper', this.usertype, '1' + this.registerShipperForm.controls.phone.value, this.registerShipperForm.controls.email.value
        ]);
      });
    }
  }

  carrier() {
    this.usertype = 'Carrier';
    console.log(this.usertype);
    this.carrierButton.style.background = 'blue';
    this.carrierButton.style.color = 'white';
    this.shipperButton.style.background = 'none';
    this.shipperButton.style.color = 'blue';
    this.carrierButton.style.transform = 'scale(1.2)';
    this.shipperButton.style.transform = 'scale(1)';
  }
  shipper() {
    this.usertype = 'Shipper';
    console.log(this.usertype);
    this.shipperButton.style.background = 'blue';
    this.shipperButton.style.color = 'white';
    this.carrierButton.style.background = 'none';
    this.carrierButton.style.color = 'blue';
    this.shipperButton.style.transform = 'scale(1.2)';
    this.carrierButton.style.transform = 'scale(1)';
  }

  async presentAlert(reason, msg) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: reason,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  togglePasswordDisplay() {
    const password = document.getElementById('password') as HTMLInputElement;
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  }
  toggleReEnteredPasswordDisplay() {
    const password = document.getElementById('re-enter-password') as HTMLInputElement;
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  }
  formOnChangesCarrier(): void {
    console.log(this.registerCarrierForm);
    this.registerCarrierForm.valueChanges
    .subscribe(
      data => {
        console.log(data);

        this.registerCarrierForm.statusChanges.subscribe(status => {
          console.log(status);
          if ( status === 'VALID') {
            console.log('you did it bruh');
            this.passwordsMatch = true;
          }
        });

        if (this.registerCarrierForm.controls.password.value === this.registerCarrierForm.controls.reEnterPassword.value &&
          this.registerCarrierForm.controls.password.touched &&
          this.registerCarrierForm.controls.email.valid) {
          console.log('Passwords Match');
      }

        if (this.registerCarrierForm.controls.password.value !== this.registerCarrierForm.controls.reEnterPassword.value) {
        console.log('Passwords dont match');
        this.passwordsMatch = false;
    }
      }
    );
  }
  formOnChangesShipper(): void {
    console.log(this.registerShipperForm);
    this.registerShipperForm.valueChanges
    .subscribe(
      data => {
        console.log(data);

        this.registerShipperForm.statusChanges.subscribe(status => {
          console.log(status);
          if ( status === 'VALID') {
            console.log('you did it bruh');
            this.passwordsMatch = true;
          }
        });

        if (this.registerShipperForm.controls.password.value === this.registerShipperForm.controls.reEnterPassword.value &&
          this.registerShipperForm.controls.password.touched &&
          this.registerShipperForm.controls.email.valid) {
          console.log('Passwords Match');
      }

        if (this.registerShipperForm.controls.password.value !== this.registerShipperForm.controls.reEnterPassword.value) {
        console.log('Passwords dont match');
        this.passwordsMatch = false;
    }
      }
    );
  }

}
