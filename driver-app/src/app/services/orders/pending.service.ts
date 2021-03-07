import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})
export class PendingService {
  BACKEND_URL = environment.url;
  userEmail: string;

  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) {
      this.userEmail = this.auth.email;
     }
  getPendingOrders() {
    return this.http.post(`${this.BACKEND_URL}/api/shipper/orders/pending-orders`, {email: this.userEmail});
  }
  getPendingOrder(orderID) {
    return this.http.post(`${this.BACKEND_URL}/api/shipper/orders/pending-order-details`, {orderID});
  }
  getPendingOrderTimer(orderID) {
    return this.http.post(`${this.BACKEND_URL}/api/shipper/orders/pending-order-timer`, {orderID});
  }
}
