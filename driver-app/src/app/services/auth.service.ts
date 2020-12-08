import { Injectable, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Platform, AlertController, MenuController , LoadingController, ToastController} from '@ionic/angular';




import { environment } from '../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BACKEND_URL = environment.url;
  TOKEN_KEY = 'access_token';
  user = null;
  authenticationState = new BehaviorSubject(false);
  loginSub: Subscription;
  activeEmail = '';

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private alertController: AlertController,
    private menuController: MenuController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private helper: JwtHelperService,
    private plt: Platform,
    private toast: ToastController) {

     // Inside the constructor we always check for an existing token so we can automatically log in a user
    this.plt.ready().then(() => {
      this.checkToken();
      this.getEmailFromToken();
    });
    console.log('Authentication State');
    this.authenticationState.subscribe(console.log);
  }

  // looks up our storage for a valid JWT and if found, changes our authenticationState
  async checkToken() {
    this.storage.get(this.TOKEN_KEY).then(token => {
      if (token) {
      const decoded = this.helper.decodeToken(token);
      const isExpired = this.helper.isTokenExpired(token);

      if (!isExpired) {
         this.user = decoded;
         console.log('Decoded Token: ' + JSON.stringify(decoded));
         this.authenticationState.next(true);
        } else {
          console.log('Token Removed from Storage');
          this.storage.remove(this.TOKEN_KEY);
        }
      }
    });
  }

  getEmailFromToken() {
    this.storage.get(this.TOKEN_KEY).then(token => {
      if (token) {
        const decoded = this.helper.decodeToken(token);
        console.log('Token Email: ' + decoded.email);
        this.activeEmail = decoded.email;
      }
    });
  }

  // Login User
  login(data) {
    console.log('Logging in');
    console.log(data);
    
    return this.loginSub = this.http.post(`${this.BACKEND_URL}/api/driver/login`,
    { email: data.email,
      password: data.password
    })
      .pipe(
        tap(res => {
          if (!res) {
            console.log('There was no response. There might be a bad password');
          }
          this.storage.set(this.TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken( res['token']);
          this.activeEmail = this.user.email;
          this.authenticationState.next(true);
          console.log('Active User: ' + this.user.email);
        }),
        catchError(e => {
          console.error(e);
          if (e.error.msg === 'The email and password don\'t match.') {
            this.presentAlert('Incorrect Email/Password', "The email and password don't match.");
          } else if (e.error.msg == 'The user does not exist') {
            this.presentAlert('Nonexistent User Account', 'There is no account with that email address.');
          } else if (e.message.startsWith('Http failure response')) {
            this.presentAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
          }  else {
            this.presentAlert('Email/Password Error', 'Please try again.');
          }
          throw new Error(e);
        })
      )
      .subscribe();
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
  async logoutLoading(msg: string) {
    const loading = await this.loadingController.create({
      cssClass: 'danger-alert',
      duration: 2000,
      message: msg,
    });

    await loading.present()
      .then( data => {
        setTimeout(() => {
          this.logout();
          this.menuController.close();
          this.logoutToast();
        }, 2000);
      })
      .catch( e => {
        console.log(e);
      });
  }

  async logoutAlert(msg: string) {
    const alert = await this.alertController.create({
      cssClass: 'danger-alert',
      message: msg,
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.logoutLoading('Logging out ...');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  async logoutToast() {
    const toast = await this.toastController.create({
      cssClass: 'success-toast',
      duration: 2000,
      message: 'You have been logged out.',
    });
    toast.present();
  }

  logout() {
    this.storage.remove(this.TOKEN_KEY).then((token) => {
      console.log('Logging out...');
      this.authenticationState.next(false);
      // window.location.reload();
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
