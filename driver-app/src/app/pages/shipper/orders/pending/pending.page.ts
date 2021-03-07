import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PendingService } from '../../../../services/orders/pending.service';
import { interval, Subscription } from 'rxjs';
import { PendingPageUdateService } from '../../../../emitters/pending-page-udate.service';
import { tap, catchError } from 'rxjs/operators';



@Component({
  selector: 'app-pending',
  templateUrl: './pending.page.html',
  styleUrls: ['./pending.page.scss'],
})
export class PendingPage implements OnInit {
  pendingSub: Subscription;
  pendingOrders;
  timerInterval: Subscription;
  individualTimerSub: Subscription;
  noOrders = true;

  constructor(
    private router: Router,
    private pending: PendingService,
    private pendingPageUdateService: PendingPageUdateService,
    private alertController: AlertController,) { }

    ngOnDestroy(): void {
      this.pendingSub.unsubscribe();
      this.timerInterval.unsubscribe();
    }
    ngOnInit() {
      this.getPendingOrders();

      // Update Orders when User creates a new order.
      if (this.pendingPageUdateService.pendingPageSub === undefined) {
        this.pendingPageUdateService.pendingPageSub = this.pendingPageUdateService.invokePendingPageUpdate.subscribe(() => {
          this.getPendingOrders()
        });
    }
    }
    getPendingOrders() {
      this.pendingSub = this.pending.getPendingOrders()
        .subscribe(
          data => {
            console.log(this.pendingOrders);
            if(this.pendingOrders === undefined || this.pendingOrders === []) {
              console.log('There are no Pending Orders');
              this.noOrders = true;
            }

            this.noOrders = false;
            return this.pendingOrders = data;
            // console.log(this.pendingOrders['bonusTimer']);
            // if(this.pendingOrders['bonusTimer'].after5Minutes == true) {
            //   console.log('5 MINUTES!!!')
            // }
            // if(this.pendingOrders['bonusTimer'].after10Minutes == true) {
            //   console.log('10 MINUTES!!!')
            // }
            // if(this.pendingOrders['bonusTimer'].after14Minutes == true) {
            //   console.log('14 MINUTES!!!')
            // }
            // if(this.pendingOrders['bonusTimer'].expired == true) {
            //   console.log('EXPIRED!!!')
            // }
        });
      this.timerInterval = interval(1000).subscribe(() => {
        console.log('Wassup');
        if(this.pendingOrders.length == 0) {
          console.log('Timers Disabled.');
          this.timerInterval.unsubscribe();
        }
        // Call Timer API for each Pending Order every second until it's time expires
        let allOrderMinutes = []
        for(let i = 0; i < this.pendingOrders.length; i++) {
          this.individualTimerSub = this.pending.getPendingOrderTimer(this.pendingOrders[i].orderID).subscribe(
            data => {
              // Track each order to see when each one has hit 15 minutes.
              allOrderMinutes.push(this.pendingOrders[i].bonusTimer.minutes)
              let allExpired = minutes => minutes == 15;
              allOrderMinutes.every(allExpired)
              console.log(allOrderMinutes);
              console.log(allOrderMinutes.every(allExpired));
              this.pendingOrders[i].bonusTimer = data;
              // Wait a second before the entire allOrderMinutes array is filled with each order's minutes.
              setTimeout(() => {
                if(allOrderMinutes.every(allExpired)) {
                  this.timerInterval.unsubscribe();
                }
              }, 1000);
            })
        }
      });
    }
    deleteAcceptedOrderAlert() {

    }
    editAcceptedOrder() {

    }
    acceptedOrderPage() {

    }
    deletePendingOrderAlert() {

    }
    editPendingOrder() {

    }
    pendingOrderPage(orderID) {
      this.router.navigate(['/shipper-orders/pending/details', orderID])
    }

}
