import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  available = false;
  state;
  drawerState;
  minimumHeight;
  dockedHeight;
  shouldBounce;
  distanceTop;

  drawer;

  constructor(
    private loadingController: LoadingController,
    private nenuController: MenuController,
    private router: Router
  ) { }

  ngOnInit() {
    this.drawer = document.getElementById('drawer');
    console.log(this.drawer);
    console.log(this.available);
    if( this.available == false ) {
      this.drawer.style.display = 'none';

    }
    if( this.available == true ) {
      this.drawer.style.display = 'block';

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

}
