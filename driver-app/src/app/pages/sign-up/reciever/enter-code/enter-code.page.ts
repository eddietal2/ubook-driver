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
  
        this.register.sendSMSCodeReciever(this.phone).subscribe(
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
        console.log('Shipper Sign Up Successful!');
        console.log(this.auth.recieverSignUp);
        this.register.registerReciever(
          this.auth.recieverSignUp.usertype,
          this.auth.recieverSignUp.firstName,
          this.auth.recieverSignUp.lastName,
          this.auth.recieverSignUp.email,
          this.auth.recieverSignUp.phone,
          this.auth.recieverSignUp.profilePicture,
          this.auth.recieverSignUp.businessAddressOne,
          this.auth.recieverSignUp.businessAddressTwo,
          this.auth.recieverSignUp.businessCity,
          this.auth.recieverSignUp.businessLogo,
          this.auth.recieverSignUp.businessName,
          this.auth.recieverSignUp.businessState,
          this.auth.recieverSignUp.businessZip,
          this.auth.recieverSignUp.businessPhone,
          this.auth.recieverSignUp.stripeToken,
          this.auth.recieverSignUp.password,
        ).subscribe(
          data => {
            console.log(data);
            this.router.navigate(['/sign-up/reciever/success']);
          }
        )
    }
    cancel() {
        this.router.navigate(['/sign-up']);
    }
  async generateCode(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;

    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log('Generated Code: ' + result);
    this.register.sendSMSCodeShipper(this.phone).subscribe(
      data => {
        console.log(data);
        
      }
    );
    return this.code = result;
 }

}
