import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { tap, catchError } from 'rxjs/operators';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  registerDriverForm: FormGroup;

  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router,
    private registerService: RegisterService) { }

  ngOnInit() {
    this.registerDriverForm = this.formBuilder.group({
      first: ['Eddie', [Validators.required]],
      last: ['Taliaferro', [Validators.required]],
      phone: ['7342237792', [Validators.required]],
      email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
      password: ['Lacrosse2', Validators.compose([
        Validators.minLength(6),
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
  }

  register() {
    console.log(this.registerDriverForm.value);
    return this.registerService.registerDriver(this.registerDriverForm.value)
      .pipe(
        tap(res => {
          console.log(res);
          
        }),
        catchError(e => {
          console.error(e.error);
          if (e.error.msg === 'There is already a Driver registered with that email') {
            this.presentAlert('Email Taken', 'There is already a Driver registered with that Email address. Please try again with another email.');
          }
          throw new Error(e);
        })
      )
      .subscribe(
      registeredDriver => {
        console.log(registeredDriver);
        this.router.navigate(['']);
        this.presentToast();
      });
  }

  async presentAlert(header: string, msg: string) {
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Registered',
      duration: 5000,
      cssClass: 'registered-toast',
      keyboardClose: true,
      position: 'bottom',

    });
    toast.present();
  }

}
