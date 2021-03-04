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
    usertype: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessAddressOne: '',
    businessAddressTwo: '',
    businessCity: '',
    businessState: '',
    businessZip: '',
    businessPhone: '',
    businessName: '',
    businessLogo: '',
    stripeToken: '',
    password: '',
  };

  newReciever = {
    usertype: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessAddressOne: '',
    businessAddressTwo: '',
    businessCity: '',
    businessState: '',
    businessZip: '',
    businessPhone: '',
    businessName: '',
    businessLogo: '',
    stripeToken: '',
    password: '',
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
  // Carrier
  sendEmailCode(email, code) {
    console.log(email, code);
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/carrier/register/send-email-code`, { email, code});
  }

  registerCarrier(
    usertype,
    firstName,
    lastName,
    email,
    phone,
    preferredContactNumber,
    mc,
    ein,
    dot,
    profilePicture,
    driverLicenseNumber,
    driverLicenseState,
    driverLicenseFrontPhoto,
    driverLicenseBackPhoto,
    stripeToken,
    password
    ) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/carrier/register`, {
      usertype,
      firstName,
      lastName,
      email,
      phone,
      preferredContactNumber,
      mc,
      ein,
      dot,
      profilePicture,
      driverLicenseNumber,
      driverLicenseState,
      driverLicenseFrontPhoto,
      driverLicenseBackPhoto,
      stripeToken,
      password
    });
  }
  sendSMSCodeCarrier(phone) {
    // tslint:disable-next-line: max-line-length
    console.log('Sending SMS Code');
    return this.http.post(`${this.BACKEND_URL}/api/carrier/register/send-sms-code`, {phone});
  }


  registerShipper(
    usertype,
    firstName,
    lastName,
    email,
    phone,
    profilePicture,
    businessAddressOne,
    businessAddressTwo,
    businessCity,
    businessState,
    businessZip,
    businessPhone,
    businessName,
    businessLogo,
    stripeToken,
    password,
    ) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/shipper/register`, {
      usertype,
      firstName,
      lastName,
      email,
      phone,
      profilePicture,
      businessName,
      businessAddressOne,
      businessAddressTwo,
      businessCity,
      businessState,
      businessZip,
      businessPhone,
      businessLogo,
      stripeToken,
      password,
    });
  }
  sendSMSCodeShipper(phone) {
    // tslint:disable-next-line: max-line-length
    console.log('Sending SMS Code');
    return this.http.post(`${this.BACKEND_URL}/api/shipper/register/send-sms-code`, {phone});
  }

  registerReciever(
    usertype,
    firstName,
    lastName,
    email,
    phone,
    profilePicture,
    businessAddressOne,
    businessAddressTwo,
    businessCity,
    businessState,
    businessZip,
    businessPhone,
    businessName,
    businessLogo,
    stripeToken,
    password,
    ) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(`${this.BACKEND_URL}/api/reciever/register`, {
      usertype,
      firstName,
      lastName,
      email,
      phone,
      profilePicture,
      businessName,
      businessAddressOne,
      businessAddressTwo,
      businessCity,
      businessState,
      businessZip,
      businessPhone,
      businessLogo,
      stripeToken,
      password,
    });
  }
  sendSMSCodeReciever(phone) {
    // tslint:disable-next-line: max-line-length
    console.log('Sending SMS Code');
    return this.http.post(`${this.BACKEND_URL}/api/reciever/register/send-sms-code`, {phone});
  }
}
