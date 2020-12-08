import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.page.html',
  styleUrls: ['./enter-code.page.scss'],
})
export class EnterCodePage implements OnInit {
  name: string;
  phone: string;
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
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.phone = this.activatedRoute.snapshot.paramMap.get('phone');
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

  register() {
    console.log('Attempting to register..');
    this.router.navigate(['/forgot-password/change-password', this.phone]);
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
