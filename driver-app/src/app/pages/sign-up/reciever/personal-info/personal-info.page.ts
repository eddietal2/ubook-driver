import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {
  recieverPersonalProfileForm: FormGroup;
  validationMessasges = {
    phone: [
      { type: 'phone', message: 'Please enter a valid phone # of 10 Digits'}
    ],
    email: [
      { type: 'email', message: 'Please enter a valid email.'}
    ],
  };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService) { }

    ngOnInit() {
      this.recieverPersonalProfileForm = this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required]]
      });
    }
    recieverProfilePicture() {
      this.auth.recieverSignUp.firstName = this.recieverPersonalProfileForm.controls['firstName'].value;
      this.auth.recieverSignUp.lastName = this.recieverPersonalProfileForm.controls['lastName'].value;
      this.auth.recieverSignUp.phone = this.recieverPersonalProfileForm.controls['phone'].value;
      this.auth.recieverSignUp.email = this.recieverPersonalProfileForm.controls['email'].value;
  
      console.log(this.auth.recieverSignUp);
      this.router.navigate(['/sign-up/reciever/picture']);
    }
    cancel() {
      this.router.navigate(['/sign-up']);
    }

}
