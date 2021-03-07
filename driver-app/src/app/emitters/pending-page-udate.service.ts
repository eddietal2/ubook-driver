import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class PendingPageUdateService {
  invokePendingPageUpdate = new EventEmitter();
  pendingPageSub: Subscription;

  constructor() { }

  updatePage() {
    this.invokePendingPageUpdate.emit();
  }
}
