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

  carrierProfile = {
    firstName: new BehaviorSubject(''),
    lastName :new BehaviorSubject(''),
    phone: new BehaviorSubject(''),
    email: new BehaviorSubject(''),
    password: new BehaviorSubject(''),
    profilePicture: new BehaviorSubject(''),
    preferredContactNumber: new BehaviorSubject(''),
    mc: new BehaviorSubject(''),
    ein: new BehaviorSubject(''),
    dot: new BehaviorSubject(''),
    stripeToken: new BehaviorSubject({}),
    card: new BehaviorSubject({}),
    businessName: new BehaviorSubject(''),
    businessAddressOne: new BehaviorSubject(''),
    businessAddressTwo: new BehaviorSubject(''),
    businessCity: new BehaviorSubject(''),
    businessState: new BehaviorSubject(''),
    businessZip: new BehaviorSubject(''),
    businessLogo: new BehaviorSubject(''),
    driverLicenseNumber: new BehaviorSubject(''),
    driverLicenseState: new BehaviorSubject(''),
    driverLicenseFrontPhoto: new BehaviorSubject(''),
    driverLicenseBackPhoto: new BehaviorSubject(''),
    insurance: new BehaviorSubject(''),
    insurancePolicyNumber: new BehaviorSubject(''),
  }
  shipperProfile = {
    firstName: new BehaviorSubject(''),
    lastName: new BehaviorSubject(''),
    phone: new BehaviorSubject(''),
    email: new BehaviorSubject(''),
    password: new BehaviorSubject(''),
    profilePicture: new BehaviorSubject(''),
    businessName: new BehaviorSubject(''),
    businessAddressOne: new BehaviorSubject(''),
    businessAddressTwo: new BehaviorSubject(''),
    businessPhone: new BehaviorSubject(''),
    businessCity: new BehaviorSubject(''),
    businessState: new BehaviorSubject(''),
    businessZip: new BehaviorSubject(''),
    businessLogo: new BehaviorSubject(''),
    stripeToken: new BehaviorSubject({}),
    card: new BehaviorSubject({})
  }
  recieverProfile = {
    firstName: new BehaviorSubject(''),
    lastName: new BehaviorSubject(''),
    phone: new BehaviorSubject(''),
    email: new BehaviorSubject(''),
    password: new BehaviorSubject(''),
    profilePicture: new BehaviorSubject(''),
    businessName: new BehaviorSubject(''),
    businessAddressOne: new BehaviorSubject(''),
    businessAddressTwo: new BehaviorSubject(''),
    businessPhone: new BehaviorSubject(''),
    businessCity: new BehaviorSubject(''),
    businessState: new BehaviorSubject(''),
    businessZip: new BehaviorSubject(''),
    businessLogo: new BehaviorSubject(''),
    stripeToken: new BehaviorSubject({}),
    card: new BehaviorSubject({})
  }

  constructor(
    private http: HttpClient,
    private auth: AuthService
    ) {
      // this.email = this.auth.user.email;
      // this.usertype = this.auth.user.usertype;
    }

  getProfile(usertype, email) {
    if (usertype === 'Carrier') {
      return this.http.post(`${this.BACKEND_URL}/api/carrier/get-carrier`, {email});
    }
    if (usertype === 'Shipper') {
      return this.http.post(`${this.BACKEND_URL}/api/shipper/get-shipper`, {email});
    }
    if (usertype === 'Reciever') {
      return this.http.post(`${this.BACKEND_URL}/api/reciever/get-reciever`, {email});
    }
  }
  editName(usertype, email, firstName, lastName) {
    console.log(`Attempting to Edit ${{usertype}}`);
    if (usertype === 'Carrier') {
      return this.http.post(`${this.BACKEND_URL}/api/carrier/edit-carrier-name`, {email});
    }
    if (usertype === 'Shipper') {
      return this.http.post(`${this.BACKEND_URL}/api/shipper/edit-shipper-name`, {email, firstName, lastName});
    }
    if (usertype === 'Reciever') {
      return this.http.post(`${this.BACKEND_URL}/api/reciever/edit-reciever-name`, {email});
    }
  }
  editEmail(usertype, email, newEmail) {
    console.log(`Attempting to Edit ${{usertype}}`);
    if (usertype === 'Carrier') {
      return this.http.post(`${this.BACKEND_URL}/api/carrier/edit-carrier-email`, {email, newEmail});
    }
    if (usertype === 'Shipper') {
      return this.http.post(`${this.BACKEND_URL}/api/shipper/edit-shipper-email`, {email, newEmail});
    }
    if (usertype === 'Reciever') {
      return this.http.post(`${this.BACKEND_URL}/api/reciever/edit-reciever-email`, {email, newEmail});
    }
  }
  editPhone(usertype, email, newPhone) {
    console.log(`Attempting to Edit ${{usertype}}`);
    if (usertype === 'Carrier') {
      return this.http.post(`${this.BACKEND_URL}/api/carrier/edit-carrier-phone`, {email, newPhone});
    }
    if (usertype === 'Shipper') {
      return this.http.post(`${this.BACKEND_URL}/api/shipper/edit-shipper-phone`, {email, newPhone});
    }
    if (usertype === 'Reciever') {
      return this.http.post(`${this.BACKEND_URL}/api/reciever/edit-reciever-phone`, {email, newPhone});
    }
  }
  editBusinessProfile(usertype, email, businessName, businessAddressOne, businessAddressTwo, businessCity, businessState, businessZip, businessPhone) {
    console.log(`Attempting to Edit ${{usertype}}`);
    if (usertype === 'Carrier') {
      return this.http.post(`${this.BACKEND_URL}/api/carrier/edit-carrier-business-profile`, {email, businessName, businessAddressOne, businessAddressTwo, businessCity, businessState, businessZip, businessPhone});
    }
    if (usertype === 'Shipper') {
      return this.http.post(`${this.BACKEND_URL}/api/shipper/edit-shipper-business-profile`, {email, businessName, businessAddressOne, businessAddressTwo, businessCity, businessState, businessZip, businessPhone});
    }
    if (usertype === 'Reciever') {
      return this.http.post(`${this.BACKEND_URL}/api/reciever/edit-reciever-business-profile`, {email, businessName, businessAddressOne, businessAddressTwo, businessCity, businessState, businessZip, businessPhone});
    }
  }
  editBusinessLogo(usertype, email, newLogo) {
    console.log(`Attempting to Edit ${{usertype}}`);
    if (usertype === 'Carrier') {
      return this.http.post(`${this.BACKEND_URL}/api/carrier/edit-carrier-business-logo`, {email, newLogo});
    }
    if (usertype === 'Shipper') {
      return this.http.post(`${this.BACKEND_URL}/api/shipper/edit-shipper-business-logo`, {email, newLogo});
    }
    if (usertype === 'Reciever') {
      return this.http.post(`${this.BACKEND_URL}/api/reciever/edit-reciever-business-logo`, {email, newLogo});
    }
  }
  editPayment(usertype, email, stripeToken) {
    console.log(`Attempting to Edit ${{usertype}}`);
    if (usertype === 'Carrier') {
      return this.http.post(`${this.BACKEND_URL}/api/carrier/edit-carrier-phone`, {email, stripeToken});
    }
    if (usertype === 'Shipper') {
      return this.http.post(`${this.BACKEND_URL}/api/shipper/edit-shipper-phone`, {email, stripeToken});
    }
    if (usertype === 'Reciever') {
      return this.http.post(`${this.BACKEND_URL}/api/reciever/edit-reciever-phone`, {email, stripeToken});
    }
  }
  editPassword(usertype, email, newPassword) {
    console.log(`Attempting to Edit ${{usertype}}`);
    if (usertype === 'Carrier') {
      return this.http.post(`${this.BACKEND_URL}/api/carrier/edit-carrier-password`, {email, newPassword});
    }
    if (usertype === 'Shipper') {
      return this.http.post(`${this.BACKEND_URL}/api/shipper/edit-shipper-password`, {email, newPassword});
    }
    if (usertype === 'Reciever') {
      return this.http.post(`${this.BACKEND_URL}/api/reciever/edit-reciever-password`, {email, newPassword});
    }
  }
}