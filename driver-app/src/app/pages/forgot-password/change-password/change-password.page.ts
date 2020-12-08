import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,
  ReactiveFormsModule } from '@angular/forms';
import { AlertController, ToastController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { tap, catchError } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  changePasswordForm: FormGroup;validationMessasges = {
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 8 characters with at least one uppercase character, and one number.'}
    ]
  };
  passwordsMatch: boolean;
  phone: string;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.phone = this.activatedRoute.snapshot.paramMap.get('phone');
    console.log(this.phone);
    
    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        // this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])],
      reEnterPassword: ['', Validators.compose([
        Validators.minLength(6),
        Validators.required,
        // this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])]
    });

    this.formOnChanges();
  }

  formOnChanges(): void {
    console.log(this.changePasswordForm);
    this.changePasswordForm.valueChanges
    .subscribe(
      data => {
        console.log(data);

        this.changePasswordForm.statusChanges.subscribe(status => {
          // tslint:disable-next-line: max-line-length
          if ( status === 'VALID' && this.changePasswordForm.controls.password.value === this.changePasswordForm.controls.reEnterPassword.value) {
            console.log('Form Status == Valid');
            this.passwordsMatch = true;
          }
        });

        if (this.changePasswordForm.controls.password.value === this.changePasswordForm.controls.reEnterPassword.value &&
          this.changePasswordForm.controls.password.touched &&
          this.changePasswordForm.controls.reEnterPassword.valid) {
          console.log('Passwords Match');
      }

        if (this.changePasswordForm.controls.password.value !== this.changePasswordForm.controls.reEnterPassword.value) {
        console.log('Passwords dont match');
        this.passwordsMatch = false;
    }
      }
    );
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

  changePassword() {
    console.log('Attempting to change password...');
    // tslint:disable-next-line: max-line-length
    this.loginService.changePassword(this.phone, this.changePasswordForm.controls.password.value)
      .pipe(
        tap( res => {
          if (!res) {
            console.log('There was no response. There might be a bad password');
          } else {
            console.log(res);
          }
        }),
        catchError( e => {
          console.error(e.error.msg);
          if (e.error.msg === 'Please enter a password that you have not used before.') {
            console.log('This should work');
            
            this.presentAlert('Use a new Password', 'Please enter a password that you have not used before.');
          }
          throw new Error(e);
        })
      )
      .subscribe(
        data => {
          this.presentLoading('Changing Password ...');
          setTimeout(() => {
            this.presentToast('Updated Password');
            this.router.navigate(['']);
          }, 1500);
        }
    );
  }

  async presentAlert(header: string, msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'success-alert',
      header,
      message: msg,
      buttons: [{
        text: 'OK'
      }]
    });

    await alert.present();
  }
  async presentToast(msg: string) {
    const alert = await this.toastController.create({
      cssClass: 'success-toast',
      message: msg,
      buttons: [{
        text: 'OK'
      }]
    });

    await alert.present();
  }
  async presentLoading(msg) {
    const alert = await this.loadingController.create({
      message: msg,
      duration: 1500,
      keyboardClose: true,
    });

    await alert.present();
  }

}
