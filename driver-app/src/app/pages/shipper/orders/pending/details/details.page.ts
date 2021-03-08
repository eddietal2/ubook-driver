import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PendingService } from '../../../../../services/orders/pending.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, OnDestroy {
  pendingOrder;
  pendingSub: Subscription;
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
    private pending: PendingService,
    private alertController: AlertController,
    private router: Router) { }

  ngOnDestroy(): void {
    this.pendingSub.unsubscribe();
  }
  ngOnInit() {
    this.orderID = this.activatedRoute.snapshot.paramMap.get('orderID');
    console.log('Order ID:');
    console.log(this.orderID);
    this.getDetails()
    // After 3 seconds, disable to progress spinner for the timer.
    setTimeout(() => {
      this.timerLoading = false;
     }, 2000)

  }
  getDetails() {
    this.pendingSub = this.pending.getPendingOrder(this.orderID)
      .subscribe(
          data => {
            this.timer = data['bonusTimer'];
            console.log(data['bonusTimer']);
            if(data['bonusTimer'].after5Minutes == true) {
              console.log('5 MINUTES!!!')
            }
            if(data['bonusTimer'].after10Minutes == true) {
              console.log('10 MINUTES!!!')
            }
            if(data['bonusTimer'].after14Minutes == true) {
              console.log('14 MINUTES!!!')
            }
            if(data['bonusTimer'].expired == true) {
              console.log('EXPIRED!!!')
            }
            this.pendingOrder = data;
            console.log(data);
            this.weight = data['weight'];
            this.truckType = data['truckType'];
            this.status = data['status'];
            this.specialRequest = data['specialRequest'];
            this.photos = data['photos'];
            this.orderID = data['orderID'];
            this.orderCreator = data['orderCreator'];
            this.messages = data['messages'];
            this.loadDescription = data['loadDescription'];
            this.dateCreated = data['dateCreated'];
            this.creatorEmail = data['creatorEmail'];
            this.broadcastRadius = data['broadcastRadius'];
            this.bonusTimer = data['bonusTimer'];
            this.bidders = data['bidders'];
            this.PUZip = data['PUZip'];
            this.PUState = data['PUState'];
            this.PUCity = data['PUCity'];
            this.PUDate = data['PUDate'];
            this.PUAddressOne = data['PUAddressOne'];
            this.PUAddressTwo = data['PUAddressTwo'];
            this.DLZip = data['DLZip'];
            this.DLState = data['DLState'];
            this.DLDate = data['DLDate'];
            this.DLCity = data['DLCity'];
            this.DLAddressOne = data['DLAddressOne'];
            this.DLAddressTwo = data['DLAddressTwo'];


  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them any more.
    });
    this.timerInterval = interval(1000).subscribe(() => {
        // Call Timer API for each Pending Order every second until it's time expires
        this.pending.getPendingOrderTimer(this.orderID).subscribe(data => {
          console.log(data);
          this.timer.minutes = data['minutes'];
          this.timer.seconds = data['seconds'];
          if(data['minutes'] == 15) {
            console.log('15 MINUTES');
            this.timerInterval.unsubscribe();
          }
        })
    });
  }
  cancelOrder() {
    this.router.navigate(['']);
  }
  candidatePage() {
    this.router.navigate(['/shipper-orders/pending/candidate-confirm']);
  }
  candidateNegotiationPage() {
    this.router.navigate(['/shipper-orders/pending/candidate-negotiation']);
  }


}
