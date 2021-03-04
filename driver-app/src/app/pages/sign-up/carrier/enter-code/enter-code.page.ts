import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { RegisterService } from '../../../../services/register.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.page.html',
  styleUrls: ['./enter-code.page.scss'],
})
export class EnterCodePage implements OnInit {
  enterCodeForm: FormGroup;
  codesMatched = false;
  code = '';
  userEmail = '';
  phone = '17342237792';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private register: RegisterService,
    private toast: ToastController) { }

  ngOnInit() {
    // this.phone = this.auth.carrierSignUp.phone;
    this.enterCodeForm =  this.formBuilder.group({
      code: ['', [Validators.required, Validators.maxLength(6)]]
    });

    this.register.sendSMSCodeCarrier(this.phone).subscribe(
      data => {
        console.log(data);
        return this.code = data['code'];
      }
    );
    this.formOnChanges();
  }

  formOnChanges(): void {
    console.log(this.enterCodeForm);
    this.enterCodeForm.valueChanges.subscribe( data => {
       console.log(data);

       if (data.code === this.code) {
          console.log('codes match');
          this.codesMatched = true;
          this.presentCodesMatchedToast()
        }

       if (data.code !== this.code) {
          this.codesMatched = false;
        }
      });
  }

 async sendNewCode() {
  await this.generateCode(6).then(code => {
    console.log('Data: ' + code);
    // this.auth.sendEmailWithCode(code, this.userEmail);
  });

  await this.presentNewCodeToast(this.userEmail);
 }

 async presentErrorToast() {
   const toast = await this.toast.create({
     message: 'The codes do not match. Please try again.',
     duration: 2000,
     cssClass: 'wrong-password-toast',
     keyboardClose: true,
     position: 'top',
   });
   toast.present();
 }

 async presentCodesMatchedToast() {
   const toast = await this.toast.create({
     message: 'Codes Matched!',
     duration: 2000,
     cssClass: 'success-toast',
     keyboardClose: true,
     position: 'bottom',
   });
   toast.present();
 }

 async presentNewCodeToast(email) {
   const toast = await this.toast.create({
     message: `New Code sent to ${email}`,
     duration: 2000,
     cssClass: 'success-toast',
     keyboardClose: true,
     position: 'top',
   });
   toast.present();
 }

  success() {
    console.log(this.auth.carrierSignUp);
    this.register.registerCarrier(
      this.auth.carrierSignUp.usertype,
      this.auth.carrierSignUp.firstName,
      this.auth.carrierSignUp.lastName,
      this.auth.carrierSignUp.email,
      this.auth.carrierSignUp.phone,
      this.auth.carrierSignUp.preferredContactNumber,
      this.auth.carrierSignUp.mc,
      this.auth.carrierSignUp.ein,
      this.auth.carrierSignUp.dot,
      this.auth.carrierSignUp.profilePicture,
      this.auth.carrierSignUp.driverLicenseNumber,
      this.auth.carrierSignUp.driverLicenseState,
      this.auth.carrierSignUp.driverLicenseFrontPhoto,
      this.auth.carrierSignUp.driverLicenseBackPhoto,
      this.auth.carrierSignUp.stripeToken,
      this.auth.carrierSignUp.password,
    ).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/sign-up/carrier/success']);
      }
    )
  }

  cancel() {

    this.router.navigate(['/sign-up']);
  }

}
