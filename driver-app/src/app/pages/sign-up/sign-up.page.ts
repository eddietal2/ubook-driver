import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,
  ReactiveFormsModule } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { tap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  registerDriverForm: FormGroup;
  passwordsMatch = false;

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
    this.registerDriverForm = this.formBuilder.group({
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

    this.formOnChanges();
  }

  checkEmailAndPhone() {
    console.log(this.registerDriverForm.value);
    // tslint:disable-next-line: max-line-length
    this.registerService.checkEmailAndPhone(this.registerDriverForm.controls.email.value, 1 + this.registerDriverForm.controls.phone.value)
      .pipe(
        tap(res => {
          console.log(res);
        }),
        catchError(e => {
          console.error(e.error);
          if (e.error.msg === 'There is already a Driver registered with that Phone Number') {
            this.presentAlert('Phone Number Invalid', 'There is already a Driver registered with that Email address. Please try again with another phone number.');
          }
          if (e.error.msg === 'There is already a Driver registered with the Email Address') {
            this.presentAlert('Email Address Invalid', 'There is already a Driver registered with that Email address. Please try again with another email.');
          }
          throw new Error(e);
        })
      )
      .subscribe(
      data => {
        // tslint:disable-next-line: max-line-length
        this.router.navigate(['/sign-up/enter-code',  this.registerDriverForm.controls.first.value + ' ' + this.registerDriverForm.controls.last.value,
        '1' + this.registerDriverForm.controls.phone.value,
        this.registerDriverForm.controls.email.value,
        this.registerDriverForm.controls.password.value]);
      });
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
    const password = document.getElementById('password');
    // if (password.type === 'password') {
    //   password.type = 'text';
    // } else {
    //   password.type = 'password';
    // }
  }
  toggleReEnteredPasswordDisplay() {
    const password = document.getElementById('re-enter-password');
    // if (password.type === 'password') {
    //   password.type = 'text';
    // } else {
    //   password.type = 'password';
    // }
  }
  formOnChanges(): void {
    console.log(this.registerDriverForm);
    this.registerDriverForm.valueChanges
    .subscribe(
      data => {
        console.log(data);

        this.registerDriverForm.statusChanges.subscribe(status => {
          console.log(status);
          if ( status === 'VALID') {
            console.log('you did it bruh');
            this.passwordsMatch = true;
          }
        });

        if (this.registerDriverForm.controls.password.value === this.registerDriverForm.controls.reEnterPassword.value &&
          this.registerDriverForm.controls.password.touched &&
          this.registerDriverForm.controls.email.valid) {
          console.log('Passwords Match');
      }

        if (this.registerDriverForm.controls.password.value !== this.registerDriverForm.controls.reEnterPassword.value) {
        console.log('Passwords dont match');
        this.passwordsMatch = false;
    }
      }
    );
  }

}
