import { Component, ElementRef, OnInit, ViewChild, Output, Input, AfterViewInit } from '@angular/core';
import { GestureController, Platform } from '@ionic/angular';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit, AfterViewInit {
  @ViewChild('drawer', {read: ElementRef}) drawer: ElementRef;
  @Output('openStateChanged') openState: EventEmitter<boolean> = new EventEmitter();
  isOpen = false;
  openHeight;
  @Input('available') available: boolean;
  pendingfilter = false;
  pendingfiltering = false;
  openfilter = false;
  openfiltering = false;

  constructor(
    private plt: Platform,
    private gesture: GestureController) { }

  ngOnInit() {
    console.log(this.available);
    
  }

  async ngAfterViewInit() {
    const drawer = this.drawer.nativeElement;
    this.openHeight = (this.plt.height() / 100) * 70;
    console.log('openHeight: ' + this.openHeight);
    drawer.style.transition = '.4s ease-out';
    drawer.style.transform = `translateY(${-this.openHeight}px)`;
    const gesture = await this.gesture.create({
      el: drawer,
      gestureName: 'swipe',
      direction: 'y',
      onMove: ev => {
        console.log(ev);
        if(ev.deltaY < -this.openHeight) {
          console.log('Open Height > DeltaY');
          console.log(ev.deltaY);
          console.log(this.openHeight);
          return;
        }
        drawer.style.transform = `translateY(${ev.deltaY}px)`;
      },
      onEnd: ev => {
        console.log('End: ' + ev.deltaY);
        if(ev.deltaY < -50 && !this.isOpen) {
          drawer.style.transition = '.4s ease-out';
          drawer.style.transform = `translateY(${-this.openHeight}px)`;
          this.openState.emit(true);
          this.isOpen = false;
        } else if (ev.deltaY > 50 && this.isOpen) {
          drawer.style.transition = '.4s ease-out';
          drawer.style.transform = '';
          this.openState.emit(false);
          this.isOpen = false;
        }
      }
    });

    gesture.enable(true);
  }

  toggleDrawer() {
    const drawer = this.drawer.nativeElement;
    this.openState.emit(!this.isOpen);

    if(this.isOpen) {
      drawer.style.transition = '.4s ease-out';
      drawer.style.transform = `translateY(${this.openHeight}px)`;
      this.isOpen = false;
    } else {
      drawer.style.transition = '.4s ease-out';
      drawer.style.transform = `translateY(${-this.openHeight}px)`;
      this.isOpen = true;
    }
  }
  filterPendingOrders() {
    if (this.pendingfilter === false) {
      console.log('Filter options already closed');
      this.pendingfilter = true;
    }
    else if (this.pendingfilter === true) {
      console.log('Filter options already closed');
      this.pendingfilter = false;
    }
  }
  filteringPendingOrders() {
    this.pendingfilter = false;
  }
  filterOpenOrders() {
    if (this.openfilter === false) {
      console.log('Filter options already closed');
      this.openfilter = true;
    }
    else if (this.openfilter === true) {
      console.log('Filter options already closed');
      this.openfilter = false;
    }
  }
  filteringOpenOrders() {
    this.openfilter = false;
  }
  closestLocationPending() {
    this.filteringPendingOrders()
  }
  closestLocationOpen() {
    this.filteringOpenOrders()
  }
}
