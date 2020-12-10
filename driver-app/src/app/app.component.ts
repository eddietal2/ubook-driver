import { Component, OnInit, OnDestroy } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isCarrier = false;
  isShipper = false;
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Carrier Home',
      url: '/carrier-home',
      icon: 'home',
      usertype: 'Carrier'
    },
    {
      title: 'Carrier Profile',
      url: '/carrier-profile',
      icon: 'people',
      usertype: 'Carrier'
    },
    {
      title: 'Carrier Orders',
      url: '/carrier-orders',
      icon: 'list',
      usertype: 'Carrier'
    },
    {
      title: 'Carrier Settings',
      url: '/carrier-settings',
      icon: 'list',
      usertype: 'Carrier'
    },
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
    private auth: AuthService,
    private router: Router,
    private menuController: MenuController
  ) {
    this.initializeApp();
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

  ngOnInit() {
   
  }

  ngOnDestroy() {
    this.auth.authenticationState.unsubscribe();
  }

  closeMenu() {
    this.menuController.close();
  }
}
