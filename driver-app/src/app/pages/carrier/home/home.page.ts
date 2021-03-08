import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, MenuController, ModalController } from '@ionic/angular';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { format } from 'date-fns'
import { PreAvailabilitySurveyPage } from '../../../modals/pre-availability-survey/pre-availability-survey.page';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [
    trigger(
      'outAnimation',
      [
        transition(':leave', [
          animate('0.5s ease-out', style({ transform: 'translateX(-100%)' }))
        ])
      ]
    )
  ]
})
export class HomePage implements OnInit {
  currentDate;
  // Set available to true to revel bottom drawer
  available = false;
  drawer;


  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private nenuController: MenuController,
    private router: Router,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.currentDate = format(Date.now(), 'EEEE, LLLL Mo')
  }
  toggle(e) {
    console.log(e);
    if (e.detail.checked) {
      this.cd.detectChanges()
      this.preAvailableSurvey();
    }
    if (!e.detail.checked) {
      this.unavailableLoading();
      this.cd.detectChanges()
    }
  }
  profilePage() {
    this.router.navigate(['/carrier-profile'])
  }
  async availableLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Making you available ...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.available = true;
    console.log('Loading dismissed!');
  }
  async unavailableLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'You are Unavailable ...',
      duration: 2000
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    this.available = false;
    console.log('Loading dismissed!');
  }
  async preAvailableSurvey() {
    const modal = await this.modalController.create({
      component: PreAvailabilitySurveyPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
     await modal.present();
     await modal.onDidDismiss().then(
       data => {
         console.log(data.data.available);
         if(data.data.available) {
          console.log('User Successfully Completed Survey and Selected Search Radius.');
          this.availableLoading();
        }
        if(!data.data.available) {
         this.unavailableLoading()
        }
       });
     console.log('Modal dismissed!');
  }
  openMenu() {
    this.nenuController.open();
  }
  activeOrder() {

  }
  allOrders() {
    this.router.navigate(['/carrier-orders'])
  }
  currentOrder() {
    this.router.navigate(['/carrier-map'])
  }
  orderPage() {
    this.router.navigate(['/carrier-order-page'])
  }


}
