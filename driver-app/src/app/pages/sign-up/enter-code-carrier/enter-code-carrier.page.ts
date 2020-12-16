import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { RegisterService } from '../../../services/register.service';

@Component({
  selector: 'app-enter-code-carrier',
  templateUrl: './enter-code-carrier.page.html',
  styleUrls: ['./enter-code-carrier.page.scss'],
})

export class EnterCodeCarrierPage implements OnInit {
  usertype: string;
  name: string;
  phone: string;
  insurance: string;
  email: string;
  password: string;
  code: string;
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
    this.usertype = this.activatedRoute.snapshot.paramMap.get('usertype');
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.phone = this.activatedRoute.snapshot.paramMap.get('phone');
    this.insurance = this.activatedRoute.snapshot.paramMap.get('insurance');
    this.email = this.activatedRoute.snapshot.paramMap.get('email');
    this.password = this.activatedRoute.snapshot.paramMap.get('password');

    this.emailInput = document.getElementById('email');
    this.sendToEmailButton = document.getElementById('send-to-email');
    this.sendToEmailLink = document.getElementById('send-to-email-link');
    this.enterCodeButton = document.getElementById('enter-code-button');

    // Send Code to SMS when this page is initiated.
    this.sendSMSCode();

    this.enterCodeForm = this.formBuilder.group({
      code: ['', [Validators.required]],
      email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
    });

    this.enterCodeForm.valueChanges.subscribe(
      data => {
        console.log(data);
        if (data['code'] === this.code) {
          console.log('Codes matched!');
          this.codesMatch = true;
          this.enterCodeButton.style.background = 'green';
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

  register() {
    console.log('Attempting to register..');
    this.registerService.registerCarrier(this.name, this.email, this.phone, this.password).subscribe(
      registeredDriver => {
        console.log(registeredDriver);
        this.registered = true;
        setTimeout(() => {
          this.router.navigate(['']);
        }, 4000);
      });
  }

  licensePage() {
    console.log('Going to License page');
    this.router.navigate(['/sign-up/enter-code-carrier/:usertype/:phone/:email/license']);
  }


  sendSMSCode() {
    console.log('Attempting to send code..');
    this.sentAnotherCodeToast();
    return this.registerService.sendSMSCode(this.phone).subscribe( data => {
      this.code = data['code'];
      this.enterCodeForm.reset();
    });
  }
  sendEmailCode() {
    console.log('Attempting to send code..');
    this.sentToEmailToast();
    return this.registerService.sendEmailCode(this.email, this.code).subscribe( data => {
      console.log(data);
    });
  }


  async sentToEmailToast() {
    const toast = await this.toastController.create({
      message: `Sent another code to ${this.email}`,
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
