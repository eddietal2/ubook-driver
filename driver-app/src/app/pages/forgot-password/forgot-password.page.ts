import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  forgotCarrierPasswordForm: FormGroup;
  forgotShipperPasswordForm: FormGroup;
  usertype: string;
  phoneLabelCarrier;
  phoneLabelShipper;
  phoneInputCarrier;
  phoneInputShipper;
  carrierButton;
  shipperButton;
  emailLabelCarrier;
  emailLabelShipper;
  emailInputCarrier;
  emailInputShipper;
  orPhoneLinkCarrier;
  orEmailLinkCarrier;
  orPhoneLinkShipper;
  orEmailLinkShipper;
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
    private activatedRoute: ActivatedRoute,
    private login: LoginService) { }

  ngOnInit() {
    this.carrierButton = document.querySelector('.carrier-button');
    this.shipperButton = document.querySelector('.shipper-button');

    this.forgotCarrierPasswordForm = this.formBuilder.group({
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
    this.forgotShipperPasswordForm = this.formBuilder.group({
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  sendCode() {
    if (!this.useEmail) {
      if (this.usertype === 'Carrier') {
        console.log('Sending code to Carrier via SMS');
        this.login.sendCode('Phone', '1' + this.forgotCarrierPasswordForm.controls.phone.value, this.usertype)
        .pipe(
          tap(res => {
            console.log(res);
          }),
          catchError(e => {
            console.error(e);
            if (e.error.msg === 'There was no Carrier with that Phone Number') {
              this.invalidPhoneAlert('Invalid Phone Number', 'Could not find a Carrier with that phone number');
            }
            throw new Error(e.error);
          })
        )
        .subscribe(
          () => {
            // tslint:disable-next-line: max-line-length
            this.router.navigate(['/forgot-password/enter-code',  '1' + this.forgotCarrierPasswordForm.controls.phone.value, this.usertype]); }
        );
      }
      if (this.usertype === 'Shipper') {
        console.log('Sending code to Shipper via Phone');
        this.login.sendCode('Phone', '1' + this.forgotShipperPasswordForm.controls.phone.value, this.usertype)
        .pipe(
          tap(res => {
            console.log(res);
          }),
          catchError(e => {
            console.error(e);
            if (e.error.msg === 'There was no Shipper with that Phone Number') {
              this.invalidPhoneAlert('Invalid Phone Number', 'Could not find a Shipper with that phone number');
            }
            throw new Error(e);
          })
        )
        .subscribe(
          () => {
            // tslint:disable-next-line: max-line-length
            this.router.navigate(['/forgot-password/enter-code',  '1' + this.forgotShipperPasswordForm.controls.phone.value, this.usertype]); }
        );
      }
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
