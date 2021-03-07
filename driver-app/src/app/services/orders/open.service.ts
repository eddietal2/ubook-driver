import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class OpenService {
  BACKEND_URL = environment.url;
  userEmail: string;

  constructor(
    private http: HttpClient,
    private auth: AuthService) {
      this.userEmail = this.auth.email;
     }
  getOpenOrders() {
    return this.http.get(`${this.BACKEND_URL}/api/carrier/orders/open-orders`);
  }
  getOpenOrder(orderID) {
    return this.http.post(`${this.BACKEND_URL}/api/carrier/orders/open-order-details`, {orderID});
  }
  getOpenOrderTimer(orderID) {
    return this.http.post(`${this.BACKEND_URL}/api/carrier/orders/open-order-timer`, {orderID});
  }
}
