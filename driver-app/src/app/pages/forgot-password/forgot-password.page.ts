import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgotPasswordForm: FormGroup;
  phoneLabel;
  phoneInput;
  emailLabel;
  emailInput;
  orPhoneLink;
  orEmailLink;
  useEmail = false;

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private login: LoginService) { }

  ngOnInit() {

    this.phoneLabel = document.getElementById('phone-label');
    this.phoneInput = document.getElementById('phone-input');
    this.emailLabel = document.getElementById('email-label');
    this.emailInput = document.getElementById('email-input');
    this.orPhoneLink = document.getElementById('or-phone');
    this.orEmailLink = document.getElementById('or-email');

    this.forgotPasswordForm = this.formBuilder.group({
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  sendCode() {
    if (!this.useEmail) {
      console.log('Sending code to Phone');
      this.login.sendCode('Phone', '1' + this.forgotPasswordForm.controls.phone.value)
      .pipe(
        tap(res => {
          console.log(res);
        }),
        catchError(e => {
          console.error(e);
          if (e.error.msg === 'Driver with that phone number does not exist') {
            this.invalidPhoneAlert('Invalid Phone Number', 'Could not find a Driver with that phone number');
          }
          throw new Error(e);
        })
      )
      .subscribe();
      // this.router.navigate(['/forgot-password/enter-code', 'Phone', '1' + this.forgotPasswordForm.controls.phone.value]);
    }
    if (this.useEmail) {
      console.log('Sending code to Email');
      this.login.sendCode('Email', this.forgotPasswordForm.controls.email.value)
      .pipe(
        tap(res => {
          console.log(res);
        }),
        catchError(e => {
          console.error(e);
          if (e.error.msg === 'Driver with that email does not exist') {
            this.invalidPhoneAlert('Invalid Email', 'Could not find a Driver with that Email');
          }
          throw new Error(e);
        })
      )
      .subscribe();
      // this.router.navigate(['/forgot-password/enter-code', 'Email', this.forgotPasswordForm.controls.email.value]);
    }
  }
  orEmail() {
    this.phoneLabel.style.opacity = 0.25;
    this.phoneInput.style.opacity = 0.25;
    this.emailLabel.style.display = 'block';
    this.emailInput.style.display = 'block';
    this.orEmailLink.style.display = 'none';
    this.orPhoneLink.style.display = 'block';
    this.useEmail = true;
  }
  orPhone() {
    this.phoneLabel.style.opacity = 1;
    this.phoneInput.style.opacity = 1;
    this.emailLabel.style.display = 'none';
    this.emailInput.style.display = 'none';
    this.orEmailLink.style.display = 'block';
    this.orPhoneLink.style.display = 'none';
    this.useEmail = false;
  }

  async invalidPhoneAlert(header: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'danger-alert',
      header,
      message: msg,
      buttons: [{
        text: 'OK'
      }]
    });

    await alert.present();
  }

}
