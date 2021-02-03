import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { RegisterService } from '../../../../services/register.service';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.page.html',
  styleUrls: ['./enter-code.page.scss'],
})
export class EnterCodePage implements OnInit {
  phone: string;
  usertype: string;
  code: string;
  email;
  enterCodeForm: FormGroup;
  emailInput: HTMLElement;
  sendToEmailButton: HTMLElement;
  sendToEmailLink: HTMLElement;
  enterCodeButton: HTMLElement;
  useEmail = false;
  codesMatch = false;
  registered = false;


  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ]
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
    this.phone = this.activatedRoute.snapshot.paramMap.get('phone');
    this.usertype = this.activatedRoute.snapshot.paramMap.get('usertype');
    console.log(this.usertype);
    

    this.emailInput = document.getElementById('email');
    this.sendToEmailButton = document.getElementById('send-to-email');
    this.sendToEmailLink = document.getElementById('send-to-email-link');
    this.enterCodeButton = document.getElementById('enter-code-button');

    // Send Code to SMS when this page is initiated.
    this.sendSMSCode();

    this.enterCodeForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });

    this.enterCodeForm.valueChanges.subscribe(
      data => {
        console.log(data);
        if (data['code'] === this.code) {
          console.log('Codes matched!');
          this.codesMatch = true;
          this.enterCodeButton.style.backgroundColor = 'green';
          this.codesMatchToast();
        } else {
          this.codesMatch = false;
        }
      }
    );
  }

  orEmail() {
    this.emailInput.style.display = 'block';
    this.sendToEmailButton.style.display = 'block';
    this.useEmail = true;
  }

  changePassword() {
    console.log('Attempting to register..');
    this.router.navigate(['/forgot-password/change-password', this.phone, this.usertype]);
  }


  sendSMSCode() {
    console.log('Attempting to send code..');
    this.sentAnotherCodeToast();
    return this.registerService.sendSMSCode(this.phone).subscribe( data => {
      this.code = data['code'];
    });
  }
  sendEmailCode() {
    console.log('Attempting to send code..');
    this.sentToEmailToast();
    return this.registerService.sendEmailCode(this.enterCodeForm.controls.email.value, this.code).subscribe( data => {
      console.log(data);
    });
  }


  async sentToEmailToast() {
    const toast = await this.toastController.create({
      message: `Sent code to ${this.enterCodeForm.controls.email.value}`,
      cssClass: 'success-toast',
      duration: 2000
    });
    toast.present();
  }
  async sentAnotherCodeToast() {
    const toast = await this.toastController.create({
      message: `Sent another code to ${this.phone}`,
      cssClass: 'success-toast',
      duration: 2000
    });
    toast.present();
  }
  async codesMatchToast() {
    const toast = await this.toastController.create({
      message: 'Codes matched!',
      cssClass: 'success-toast',
      duration: 2000
    });
    toast.present();
  }


}
