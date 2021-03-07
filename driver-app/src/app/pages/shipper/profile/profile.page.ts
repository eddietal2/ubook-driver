import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { ProfileService } from '../../../services/profile.service';
import { EmailPage } from '../../../modals/shipper-profile/personal/email/email.page';
import { NamePage } from '../../../modals/shipper-profile/personal/name/name.page';
import { PicturePage } from '../../../modals/shipper-profile/personal/picture/picture.page';
import { RatingPage } from '../../../modals/shipper-profile/rating/rating.page';
import { PhonePage } from '../../../modals/shipper-profile/personal/phone/phone.page';
import { BusinessProfilePage } from '../../../modals/shipper-profile/business/profile/profile.page';
import { BusinessLogoPage } from '../../../modals/shipper-profile/business/logo/logo.page';
import { BusinessPaymentPage } from '../../../modals/shipper-profile/business/payment/payment.page';
import { PasswordPage } from '../../../modals/shipper-profile/personal/password/password.page';

interface Shipper {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  profilePicture: string;
  password: string;
  stripeToken: any;
  card: any;
  usertype: string;
  businessName: string,
  businessAddressOne: string;
  businessAddressTwo: string;
  businessCity: string;
  businessState: string;
  businessZip: string;
  businessPhone: string;
  businessLogo: string;
}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  authEmail;
  usertype;
  shipper: Shipper = {
    usertype: 'Shipper',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    profilePicture: '',
    password: '',
    businessName: '',
    businessAddressOne: '',
    businessAddressTwo: '',
    businessCity: '',
    businessState: '',
    businessZip: '',
    businessLogo: '',
    businessPhone: '',
    stripeToken: '',
    card: '',
  };

  constructor(
    public modalController: ModalController,
    private auth: AuthService,
    private toastController: ToastController,
    private profile: ProfileService) { }

  ngOnInit() {
    // For Quick Carrier Logins on Refresh. Delete during production
      this.authEmail = this.auth.email;
      this.usertype = this.auth.usertype;

      this.profile.getProfile(this.usertype, this.authEmail).subscribe(
        data => {
           const usertype = data['usertype'];
           const firstName = data['firstName'];
           const lastName = data['lastName'];
           const phone = data['phone'];
           const email = data['email'];
           const password = data['password'];
           const profilePicture = data['profilePicture'];
           const businessName = data['businessName'];
           const businessAddressOne = data['businessAddressOne'];
           const businessAddressTwo = data['businessAddressTwo'];
           const businessCity = data['businessCity'];
           const businessState = data['businessState'];
           const businessZip = data['businessZip'];
           const businessLogo = data['businessLogo'];
           const stripeToken = data['stripeToken'];
           console.log(data);

          this.profile.shipperProfile.firstName.next(firstName);
          this.profile.shipperProfile.lastName.next(lastName);
          this.profile.shipperProfile.phone.next(phone);
          this.profile.shipperProfile.email.next(email);
          this.profile.shipperProfile.password.next(password);
          this.profile.shipperProfile.profilePicture.next(profilePicture);
          this.profile.shipperProfile.stripeToken.next(stripeToken);
          this.profile.shipperProfile.card.next(stripeToken[0].card);
          this.profile.shipperProfile.businessName.next(businessName);
          this.profile.shipperProfile.businessAddressOne.next(businessAddressOne);
          this.profile.shipperProfile.businessAddressTwo.next(businessAddressTwo);
          this.profile.shipperProfile.businessCity.next(businessCity);
          this.profile.shipperProfile.businessState.next(businessState);
          this.profile.shipperProfile.businessZip.next(businessZip);
          this.profile.shipperProfile.businessLogo.next(businessLogo);

          // Subscribe to all the B.Subjects to get live updates of value changes.
          this.profile.shipperProfile.firstName.subscribe(data => {this.shipper.firstName = data;});
          this.profile.shipperProfile.lastName.subscribe(data => {this.shipper.lastName = data;});
          this.profile.shipperProfile.phone.subscribe(data => {this.shipper.phone = data;});
          this.profile.shipperProfile.email.subscribe(data => {this.shipper.email = data;});
          this.profile.shipperProfile.password.subscribe(data => {this.shipper.password = data;});
          this.profile.shipperProfile.stripeToken.subscribe(data => {this.shipper.stripeToken = data;});
          this.profile.shipperProfile.card.subscribe(data => {this.shipper.card = data;});
          this.profile.shipperProfile.businessAddressOne.subscribe(data => {this.shipper.businessAddressOne = data;});
          this.profile.shipperProfile.businessAddressTwo.subscribe(data => {this.shipper.businessAddressTwo = data;});
          this.profile.shipperProfile.businessCity.subscribe(data => {this.shipper.businessCity = data;});
          this.profile.shipperProfile.businessState.subscribe(data => {this.shipper.businessState = data;});
          this.profile.shipperProfile.businessZip.subscribe(data => {this.shipper.businessZip = data;});
          this.profile.shipperProfile.businessLogo.subscribe(data => {this.shipper.businessLogo = data;});
          this.profile.shipperProfile.businessPhone.subscribe(data => {this.shipper.businessPhone = data;});
          this.profile.shipperProfile.businessName.subscribe(data => {this.shipper.businessName = data;});
        }
      )
  }
  async ratingModal() {
    const modal = await this.modalController.create({
      component: RatingPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async profilePictureModal() {
    const modal = await this.modalController.create({
      component: PicturePage,
      cssClass: 'my-custom-class',
      componentProps: {
        profilePicture: this.shipper.profilePicture
      }
    });
    return await modal.present();
  }
  async nameModal() {
    const modal = await this.modalController.create({
      component: NamePage,
      cssClass: 'my-custom-class',
      componentProps: {
        firstName: this.shipper.firstName,
        lastName: this.shipper.lastName,
        email: this.shipper.email
      }
    });
    return await modal.present();
  }
  async emailModal() {
    const modal = await this.modalController.create({
      component: EmailPage,
      cssClass: 'my-custom-class',
      componentProps: {
        email: this.shipper.email
      }
    });
    return await modal.present();
  }
  async phoneModal() {
    const modal = await this.modalController.create({
      component: PhonePage,
      cssClass: 'my-custom-class',
      componentProps: {
        phone: this.shipper.phone,
        email: this.shipper.email
      }
    });
    return await modal.present();
  }
  async passwordModal() {
    const modal = await this.modalController.create({
      component: PasswordPage,
      cssClass: 'my-custom-class',
      componentProps: {
        password: this.shipper.password,
        email: this.shipper.email
      }
    });
    return await modal.present();
  }
  async businessProfileModal() {
    const modal = await this.modalController.create({
      component: BusinessProfilePage,
      cssClass: 'my-custom-class',
      componentProps: {
        businessName: this.shipper.businessName,
        businessAddressOne: this.shipper.businessAddressOne,
        businessAddressTwo: this.shipper.businessAddressTwo,
        businessCity: this.shipper.businessCity,
        businessZip: this.shipper.businessZip,
        businessState: this.shipper.businessState,
        businessPhone: this.shipper.businessPhone,
        email: this.shipper.email
      }
    });
    return await modal.present();
  }
  async businessLogoModal() {
    const modal = await this.modalController.create({
      component: BusinessLogoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        businessLogo: this.shipper.businessLogo,
        email: this.shipper.email
      }
    });
    return await modal.present();
  }
  async paymentModal() {
    const modal = await this.modalController.create({
      component: BusinessPaymentPage,
      cssClass: 'my-custom-class',
      componentProps: {
        stripeToken: this.shipper.stripeToken,
        email: this.shipper.email
      }
    });
    return await modal.present();
  }


}
