import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  BACKEND_URL = environment.url;

  constructor(
    private http: HttpClient) { }

  checkEmailAndPhoneCarrier(email, phone) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/driver/register/check-email-and-phone`, {email, phone});
  }
  checkEmailAndPhoneShipper(email, phone) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/driver/shipper/check-email-and-phone`, {email, phone});
  }
  sendSMSCode(phone) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/driver/register/send-sms-code`, { phone});
  }
  sendEmailCode(email, code) {
    console.log(email, code);
    
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/driver/register/send-email-code`, { email, code});
  }
  registerDriver(name, email, phone, password) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/driver/register`, {name, email, phone, password});
  }
}
