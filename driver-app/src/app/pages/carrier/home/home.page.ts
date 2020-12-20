import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DrawerState } from 'ion-bottom-drawer';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger(
      'outAnimation',
      [
        transition(':leave', [
          animate('0.8s ease-out', style({ transform: 'translateX(-100%)' }))
        ])
      ]
    )
  ]
})
export class HomePage implements OnInit {
  available = false;
  filter = false;
  filtering = false;
  drawerState = DrawerState.Bottom;
  minimumHeight = '100px';
  dockedHeight = '100px';
  shouldBounce;
  distanceTop = '100px';
  drawer;
  swipeAreaHeader;
  swipeAreaText;
  drawerIconWrapper;

  constructor(
    private loadingController: LoadingController,
    private nenuController: MenuController,
    private router: Router
  ) { }

  ngOnInit() {
    this.drawer = document.getElementById('drawer')
    this.swipeAreaHeader = document.getElementById('swipe-area-header');
    this.swipeAreaText = document.getElementById('swipe-area-text');
    if( this.available == false ) {
      this.drawer.style.display = 'none';

    }
    if( this.available == true ) {
      this.drawer.style.display = 'block';
      ;
      this.drawerIconWrapper = document.querySelector('drawer-icon-wrapper');
      console.log(this.drawerIconWrapper);

    }
  }
  toggle(e) {
    console.log(e);
    console.log(this.available);
    if (e.detail.checked) {
      this.available = true;
      this.availableLoading();
      this.drawer.style.display = 'block';
    }
    if (!e.detail.checked) {
      this.available = false;
      this.unavailableLoading()
      this.drawer.style.display = 'none';
    }
  }
  async availableLoading() {
    if (this.available) {
      const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Making you available ...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    }
  }
  async unavailableLoading() {
    if (!this.available) {
      const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'You are Unavailable ...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    }
  }
  openMenu() {
    this.nenuController.open();
  }
  allOrders() {
    this.router.navigate(['/carrier-orders'])
  }
  currentOrder() {
    this.router.navigate(['/carrier-current-order'])
  }
  orderPage() {
    this.router.navigate(['/carrier-order-page'])
  }
  filterOpenOrders() {
    if (this.filter === false) {
      console.log('Filter options already closed');
      this.filter = true;
    }
    else if (this.filter === true) {
      console.log('Filter options already closed');
      this.filter = false;
    }
  }
  closestLocation() {
    this.filterOrders()
  }
  highestRate() {
    this.filterOrders()
  }
  lowestRate() {
    this.filterOrders()
  }
  filterOrders() {
    this.filtering = true;
    setTimeout(() => {
      this.filtering = false;
    }, 2000);
  }
  drawerStateEvent(e) {
    console.log(e);
    if(e === 1) {
      console.log('DrawerState.Top');
      this.swipeAreaHeader.innerHTML = '';
      this.swipeAreaText.innerHTML = 'Swipe Down to Close';
      // 2 = DrawerState.Bottom
      // Reveal Drawer Close Button
      let drawerCloseButton = document.getElementById('drawer-close-button');
      drawerCloseButton.style.display = 'none';
      console.log('Wassup!!!')
    }
    if(e === 2) {
      console.log('DrawerState.Top');
      // 2 = DrawerState.Top
      // Reveal Drawer Close Top
      let drawerCloseButton = document.getElementById('drawer-close-button');

      let chevronIcon = document.getElementById('chevron-up-icon');
      let threeDotTop = document.getElementById('3-dot-top');
      console.log(chevronIcon);
      chevronIcon.style.opacity = '0';
      threeDotTop.style.opacity = '0';
      drawerCloseButton.style.display = 'block';
    }
    if(e === 0) {
      console.log('DrawerState.Docked');
      // 2 = DrawerState.Bottom
      // Reveal Drawer Close Button

      let drawerCloseButton = document.getElementById('drawer-close-button');
      let chevronIcon = document.getElementById('chevron-up-icon');
      let threeDotTop = document.getElementById('3-dot-top');
      chevronIcon.style.opacity = '1';
      threeDotTop.style.opacity = '1';
      this.swipeAreaHeader.innerHTML = 'Open Orders';
      this.swipeAreaText.innerHTML = 'Swipe Up';
      drawerCloseButton.style.display = 'block';
    }
  }
  closeDrawer() {
    console.log('Attempting to changed Bottom Drawer State');
    let chevronIcon = document.getElementById('chevron-up-icon');
    let threeDotTop = document.getElementById('3-dot-top');
    chevronIcon.style.opacity = '1';
    threeDotTop.style.opacity = '1';
    this.drawerState = DrawerState.Bottom;
    this.swipeAreaHeader.innerHTML = 'Open Orders';
    this.swipeAreaText.innerHTML = 'Swipe Up';
  }


}
