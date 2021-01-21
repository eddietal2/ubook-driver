import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController, ToastController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { LocationService } from './services/location.service';
import { Plugins } from '@capacitor/core';
const { Geolocation, Network } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isCarrier = false;
  isShipper = false;
  networkStatus: boolean;
  public selectedIndex = 0;
  public appPages = [
    // Carrier Pages
    {
      title: 'Home',
      url: '/carrier-home',
      icon: 'home',
      usertype: 'Carrier'
    },
    {
      title: 'Profile',
      url: '/carrier-profile',
      icon: 'people',
      usertype: 'Carrier'
    },
    {
      title: 'Orders',
      url: '/carrier-orders',
      icon: 'list',
      usertype: 'Carrier'
    },
    {
      title: 'Settings',
      url: '/carrier-settings',
      icon: 'list',
      usertype: 'Carrier'
    },


    // Shipper Pages
    {
      title: 'Shipper Home',
      url: '/shipper-home',
      icon: 'home',
      usertype: 'Shipper'
    },
    {
      title: 'Shipper Profile',
      url: '/shipper-profile',
      icon: 'people',
      usertype: 'Shipper'
    },
    {
      title: 'Shipper Orders',
      url: '/shipper-orders',
      icon: 'list',
      usertype: 'Shipper'
    },
    {
      title: 'Shipper Settings',
      url: '/shipper-settings',
      icon: 'list',
      usertype: 'Shipper'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public auth: AuthService,
    private locationService: LocationService,
    private router: Router,
    private menuController: MenuController,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    window.navigator.vibrate(2000);

   // Get Geolocation
   Geolocation.getCurrentPosition()
   .then(
     (e) => {
       this.locationService.lat = e.coords.latitude;
       this.locationService.lng = e.coords.longitude;

       console.log(`Latitude: ${this.locationService.lat}`);
       console.log(`Longitude: ${this.locationService.lng}`);
       ;
     })
   .catch(
     (e) => {
       throw Error(e)
     });

    // Check network status
    Network.getStatus()
    .then(async (e) => {
      console.log(`Current Network Status: ${e.connected}`);
      this.networkStatus = e.connected;
      if (!e.connected) {
        const toast = await this.toastController.create({
          message: 'You are now offline. Please make sure that you are connected to network.',
          cssClass: 'danger-toast',
          duration: 2000
        });
        await toast.present();
      }
    })
    .catch((e) => {
      console.log(e);
    })
    .finally(() => {
      // console.log('Network Get Status Promise has Resolved.');
    });

    // Detect when the Network changes.
    Network.addListener('networkStatusChange', async (e) => {
      console.log(`Network Status: ${e.connected}`);
      if (e.connected) {
        this.onlineToast();
      }
      if (!e.connected) {
        const toast = await this.toastController.create({
          message: 'You are now offline. Please make sure than you are connected to network.',
          cssClass: 'danger-toast',
          duration: 2000
        });
        await toast.present();
      }
    })
  }

  ngOnDestroy() {
    this.auth.authenticationState.unsubscribe();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

     // State for the User. If Authentication State == False, the app reverts back to the landing page
    this.auth.authenticationState.subscribe(async state => {
      if (state) {
        if (this.auth.usertype === 'Carrier') {
          this.router.navigate(['carrier-home']);
          return this.isCarrier === true;
        }
        if (this.auth.usertype === 'Shipper') {
          this.router.navigate(['shipper-home']);
          return this.isShipper === true;
        }
      } else {
        this.router.navigate(['']);
      }
    });
  }

  closeMenu() {
    this.menuController.close();
  }

  async offlineToast() {
    
  }
  async onlineToast() {
    const toast = await this.toastController.create({
      message: 'You have been reconnected.',
      cssClass: 'success-toast',
      duration: 2000
    });
    await toast.present();
  }


}
