import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
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
  email: string;
  usertype: string;
  name: string;
  rating: number;
  title: string;

  carrierSignUp = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: false,
    preferredContactNumber: '',
    ownerOperator: false,
    mc: '',
    ein: '',
    dot: '',
    profilePicture: '',
    driverLicenseNumber: '',
    driverLicenseState: '',
    driverLicenseFrontPhoto: '',
    driverLicenseBackPhoto: '',
    stripeToken: ''
  };
  shipperSignUp = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: false,
    preferredContactNumber: '',
    ownerOperator: false,
    mc: '',
    ein: '',
    dot: '',
  };

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
        this.email = decoded.email;
      }
    });
  }

  // Login User
  login(data, usertype) {
    console.log('Logging in');
    console.log(data, usertype);

    if (usertype === 'Carrier') {
      console.log('Carrier is attempting to log in...');
      return this.loginSub = this.http.post(`${this.BACKEND_URL}/api/carrier/login/`,
    { email: data.email,
      password: data.password,
      usertype
    })
      .pipe(
        tap(res => {
          if (!res) {
            console.log('There was no response. There might be a bad password');
          }
          this.storage.set(this.TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken( res['token']);
          this.email = this.user.email;
          this.usertype = this.user.usertype;
          this.name = this.user.name;
          this.rating = this.user.rating;
          console.log('Email: ' + this.user.email);
          console.log('Name: ' + this.user.name);
          console.log('Usertype: ' + this.user.usertype);
          console.log('Rating: ' + this.user.rating);
        }),
        catchError(e => {
          console.error(e);
          if (e.error.msg === 'The email and password don\'t match.') {
            this.presentAlert('Incorrect Email/Password', 'The email and password don\'t match.');
          } else if (e.error.msg === 'The Carrier does not exist') {
            this.presentAlert('Carrier does not exist', 'There is no account with that email address.');
          } else if (e.message.startsWith('Http failure response')) {
            this.presentAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
          }  else {
            this.presentAlert('Email/Password Error', 'Please try again.');
          }
          throw new Error(e);
        })
      ).subscribe(
        () => {
          this.presentLoading();
        }
      );
    }
    if (usertype === 'Shipper') {
      console.log('Shipper is attempting to log in...');
      return this.loginSub = this.http.post(`${this.BACKEND_URL}/api/shipper/login/`,
    { email: data.email,
      password: data.password,
      usertype
    })
      .pipe(
        tap(res => {
          if (!res) {
            console.log('There was no response. There might be a bad password');
          }
          this.storage.set(this.TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken( res['token']);
          this.email = this.user.email;
          this.title = this.user.title;
          this.usertype = this.user.usertype;
          this.name = this.user.name;
          this.rating = this.user.rating;
          console.log('Email: ' + this.user.email);
          console.log('Name: ' + this.user.name);
          console.log('Usertype: ' + this.user.usertype);
          console.log('Title: ' + this.user.title);
          console.log('Rating: ' + this.user.rating);
        }),
        catchError(e => {
          console.error(e);
          if (e.error.msg === 'The email and password don\'t match.') {
            this.presentAlert('Incorrect Email/Password', 'The email and password don\'t match.');
          } else if (e.error.msg === 'The Shipper does not exist') {
            this.presentAlert('Shipper does not exist', 'There is no account with that email address.');
          } else if (e.message.startsWith('Http failure response')) {
            this.presentAlert('Server Connection Error', 'There was a problem connecting to the server. Please try again later.');
          }  else {
            this.presentAlert('Email/Password Error', 'Please try again.');
          }
          throw new Error(e);
        })
      ).subscribe(
        () => {
          this.presentLoading();
        });
    }
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

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Logging in...',
      duration: 1000,
      cssClass: 'success-toast',
      keyboardClose: true,
    });
    await loading.present();

    await loading.onDidDismiss().then(() => {
      this.authenticationState.next(true);
    }
    );
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
      return this.authenticationState.next(false);
      window.location.reload();
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }
}
