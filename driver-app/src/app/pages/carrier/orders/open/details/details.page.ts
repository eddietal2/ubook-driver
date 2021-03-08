import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { OpenService } from '../../../../../services/orders/open.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  openOrder;
  openSub: Subscription;
  timer;
  timerLoading = true;
  timerInterval: Subscription;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  weight: number;
  truckType: string;
  status: string;
  specialRequest: string;
  photos = [];
  orderID: string;
  orderCreator: string;
  messages = [];
  loadDescription: string;
  dateCreated: string;
  creatorEmail: string;
  broadcastRadius: number;
  bonusTimer: string;
  bidders = [];
  PUZip: string;
  PUState: string;
  PUCity: string;
  PUDate: string;
  PUAddressOne: string;
  PUAddressTwo: string;
  DLZip: string;
  DLState: string;
  DLDate: string;
  DLCity: string;
  DLAddressOne: string;
  DLAddressTwo: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private open: OpenService,
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
    this.getDetails()
    setTimeout(() => {
      this.timerLoading = false;
     }, 2000)
  }
  getDetails() {
    this.orderID = this.activatedRoute.snapshot.paramMap.get('orderID');
    this.openSub = this.open.getOpenOrder(this.orderID)
      .subscribe(
          data => {
            this.timer = data[0]['bonusTimer'];
            console.log(data['bonusTimer']);
            if(data[0]['bonusTimer'].after5Minutes == true) {
              console.log('5 MINUTES!!!')
            }
            if(data[0]['bonusTimer'].after10Minutes == true) {
              console.log('10 MINUTES!!!')
            }
            if(data[0]['bonusTimer'].after14Minutes == true) {
              console.log('14 MINUTES!!!')
            }
            if(data[0]['bonusTimer'].expired == true) {
              console.log('EXPIRED!!!')
            }
            this.openOrder = data[0];
            console.log(this.openOrder);
            this.weight = data[0]['weight'];
            this.truckType = data[0]['truckType'];
            this.status = data[0]['status'];
            this.specialRequest = data[0]['specialRequest'];
            this.photos = data[0]['photos'];
            this.orderID = data[0]['orderID'];
            this.orderCreator = data[0]['orderCreator'];
            this.messages = data[0]['messages'];
            this.loadDescription = data[0]['loadDescription'];
            this.dateCreated = data[0]['dateCreated'];
            this.creatorEmail = data[0]['creatorEmail'];
            this.broadcastRadius = data[0]['broadcastRadius'];
            this.bonusTimer = data[0]['bonusTimer'];
            this.bidders = data[0]['bidders'];
            this.PUZip = data[0]['PUZip'];
            this.PUState = data[0]['PUState'];
            this.PUCity = data[0]['PUCity'];
            this.PUDate = data[0]['PUDate'];
            this.PUAddressOne = data[0]['PUAddressOne'];
            this.PUAddressTwo = data[0]['PUAddressTwo'];
            this.DLZip = data[0]['DLZip'];
            this.DLState = data[0]['DLState'];
            this.DLDate = data[0]['DLDate'];
            this.DLCity = data[0]['DLCity'];
            this.DLAddressOne = data[0]['DLAddressOne'];
            this.DLAddressTwo = data[0]['DLAddressTwo'];


  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
    });
    this.timerInterval = interval(1000).subscribe(() => {
        // Call Timer API for each Pending Order every second until it's time expires
        this.open.getOpenOrderTimer(this.orderID).subscribe(data => {
          console.log(data);
          this.timer.minutes = data['minutes'];
          this.timer.seconds = data['seconds'];
          console.log(this.timer.minutes);
          console.log(this.timer.seconds);
          if(data['minutes'] == 15) {
            console.log('15 MINUTES');
            this.timerInterval.unsubscribe();
          }
        })
    });
  }
  respondWithRate() {
    this.router.navigate(['carrier-respond-with-rate']);
  }
  editRate() {
    
  }

}
