import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,
  ReactiveFormsModule } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
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
          console.log(status);
          if ( status === 'VALID') {
            console.log('you did it bruh');
            this.passwordsMatch = true;
          }
        });

        if (this.changePasswordForm.controls.password.value === this.changePasswordForm.controls.reEnterPassword.value &&
          this.changePasswordForm.controls.password.touched &&
          this.changePasswordForm.controls.email.valid) {
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
    const password = document.getElementById('password');
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  }
  toggleReEnteredPasswordDisplay() {
    const password = document.getElementById('re-enter-password');
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  }

  changePassword() {
    console.log('Attempting to change password...');
    this.loginService.changePassword(this.phone, this.changePasswordForm.controls.password.value).subscribe(
      data => {
        this.router.navigate(['']);
      }
    );
  }

}
