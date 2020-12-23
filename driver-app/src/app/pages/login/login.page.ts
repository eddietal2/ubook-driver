import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(':leave', [
          animate('0.8s ease-out', style({ transform: 'translateX(100%)' }))
        ])
      ]
    )
  ]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  downloadButton;
  usertypeSelected = false;
  isCarrier = false;
  isShipper = false;
  validationMessasges = {
    email: [
      { type: 'email', message: 'Must be a valid email address'}
    ],
    password: [
      // tslint:disable-next-line: max-line-length
      { type: 'pattern', message: 'Password must be at least 6 characters with at least one lowercase character, one uppcase character, and one number.'}
    ]
  };
  deferredPrompt;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private loading: LoadingController,
    private toast: ToastController,
    private router: Router
  ) { }
  ngOnInit() {
    this.downloadButton = document.getElementById('download-button');


    window.addEventListener('beforeinstallprompt', (
      e ) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      this.downloadButton.addEventListener(
        'click', (e) => {
          console.log(e);
          this.deferredPrompt.prompt();
        })

    });
    // Testing out Notifications API
    Notification.requestPermission()
      .then((result) => {
        if (result === 'granted') {
          console.log('Permission Granted');
          this.randomNotification();
        }
      })
      .catch((error) => {
        navigator.serviceWorker.ready.then(function(registration) {
          registration.showNotification('Vibration Sample', {
            body: 'Buzz! Buzz!',
            icon: '../images/touch/chrome-touch-icon-192x192.png',
            vibrate: [200, 100, 200, 100, 200, 100, 200],
            tag: 'vibration-sample'
          });
        });
      });

    this.loginForm = this.formBuilder.group({
      email: ['eddielacrosse2@gmail.com', [Validators.required, Validators.email]],
      password: ['Lacrosse2', Validators.compose([
        Validators.minLength(6),
        Validators.required,
        // this is for the letters (both uppercase and lowercase) and numbers validation
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
     ])]
    });

    console.log(this.loginForm.value);
  }
  login() {
    console.log(this.loginForm.value);
    if (this.isCarrier) {
      this.auth.login(this.loginForm.value, 'Carrier');
    }
    if (this.isShipper) {
      this.auth.login(this.loginForm.value, 'Shipper');
    }
  }
  register() {
    this.router.navigate(['/sign-up']);
  }
  forgotPassowrd() {
    if (this.isCarrier) {
      this.router.navigate(['/forgot-password']);
    }
    if (this.isShipper) {
      this.router.navigate(['/forgot-password']);
    }
  }
  carrier() {
    this.usertypeSelected = true;
    this.isCarrier = true;
    this.isShipper = false;
  }
  shipper() {
    this.usertypeSelected = true;
    this.isShipper = true;
    this.isCarrier = false;
  }
  randomNotification() {
    var options = {
      body: 'Created by Eddie Taliaferro',
      icon: '/Users/ferro/Desktop/ubook-master/ubook-driver/driver-app/src/assets/3-dot-icon-inactive.svg'
  }

    var notif = new Notification('Wassup', options);
    setTimeout(this.randomNotification, 1000);
  }
  showInstallBanner() {

    console.log('Trying to Show Install Banner ...');
    console.log(this.deferredPrompt);
    if (this.deferredPrompt === undefined) {
      console.log('This page was already installed');
      this.downloadButton.style.display = 'none';
    }
    if (this.deferredPrompt !== undefined && this.deferredPrompt !== null) {
      // Hide Download Button
      this.downloadButton.style.display = 'none';
      // Show the prompt
      // this.deferredPrompt.;
      // Wait for the user to respond to the prompt
      // this.deferredPrompt.userChoice
      // .then((choiceResult) => {
      //   if (choiceResult.outcome === 'accepted') {
      //     console.log('User accepted the A2HS prompt');
      //   } else {
      //     this.downloadButton.style.display = 'block';
      //     this.downloadButton.style.margin = '0 auto 90px auto';
      //     console.log('User dismissed the A2HS prompt');
      //   }
      //   // We no longer need the prompt.  Clear it up.
      //   this.deferredPrompt = null;
      // });
    }



  }
}
