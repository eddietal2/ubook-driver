import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Plugins } from '@capacitor/core';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  BACKEND_URL = environment.url;

  fullName = new BehaviorSubject('');
  email: string;
  usertype: string;

  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) {
      this.email = this.auth.user.email;
      this.usertype = this.auth.user.usertype;
    }

  getProfile(usertype, email) {
    if (usertype === 'Carrier') {
      return this.http.post(`${this.BACKEND_URL}/api/carrier/get-carrier`, {email});
    }
    if (usertype === 'Shipper') {
      return this.http.post(`${this.BACKEND_URL}/api/shipper/get-shipper`, {email});
    }
  }
}
