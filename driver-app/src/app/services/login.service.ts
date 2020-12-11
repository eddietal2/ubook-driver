import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient) { }

    sendCode(type, value, usertype) {
      console.log(value);
      if (usertype === 'Carrier') {
        if (type === 'Phone') {
          console.log('Carrier forgot their password, sending code through SMS ...');
          return this.http.post(`${this.BACKEND_URL}/api/carrier/login/forgot-password-send-code`, {type, phone: value});
        }
        if (type === 'Email') {
          console.log('Carrier forgot their password, sending code through Email ...');
          return this.http.post(`${this.BACKEND_URL}/api/carrier/login/forgot-password-send-code`, {type, phone: value});
        }
      }
      if (usertype === 'Shipper') {

      console.log(value);
      return this.http.post(`${this.BACKEND_URL}/api/shipper/login/forgot-password-send-code`, {type, phone: value});
      }
    }
    changePassword(phone, password, usertype) {
      // tslint:disable-next-line: max-line-length
      return this.http.post(`${this.BACKEND_URL}/api/carrier/login/change-password`, {phone, password, usertype});
    }
}
