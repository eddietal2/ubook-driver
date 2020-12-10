import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  BACKEND_URL = environment.url;

  newCarrier = {
    name: '',
    email: '',
    phone: '',
    description: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    state: '',
    zip: '',
    insurance: '',
    password: '',
    profilePicture: '',
    liscensePicture: '',
    liscenseNumber: ''
  };

  newShipper = {
    name: '',
    email: '',
    phone: '',
    addressOne: '',
    addressTwo: '',
    password: '',
    profilePicture: '',
  };

  constructor(
    private http: HttpClient) { }

  checkEmailAndPhoneCarrier(email, phone) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/carrier/register/check-email-and-phone`, {email, phone});
  }
  checkEmailAndPhoneShipper(email, phone) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/shipper/register/check-email-and-phone`, {email, phone});
  }
  sendSMSCode(phone) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/carrier/register/send-sms-code`, {phone});
  }
  sendEmailCode(email, code) {
    console.log(email, code);
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/carrier/register/send-email-code`, { email, code});
  }
  registerCarrier(name, email, phone, password) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/carrier/register`, {name, email, phone, password});
  }
  registerShipper(name, email, phone, password) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/shipper/register`, {name, email, phone, password});
  }
}
