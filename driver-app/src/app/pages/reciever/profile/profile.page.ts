import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';
import { ProfileService } from '../../../services/profile.service';
import { EmailPage } from '../../../modals/reciever-profile/personal/email/email.page';
import { NamePage } from '../../../modals/reciever-profile/personal/name/name.page';
import { PicturePage } from '../../../modals/reciever-profile/personal/picture/picture.page';
import { RatingPage } from '../../../modals/reciever-profile/rating/rating.page';
import { PhonePage } from '../../../modals/reciever-profile/personal/phone/phone.page';
import { PasswordPage } from '../../../modals/reciever-profile/personal/password/password.page';
import { BusinessLogoPage } from '../../../modals/reciever-profile/business/logo/logo.page';
import { BusinessPaymentPage } from '../../../modals/reciever-profile/business/payment/payment.page';
import { BusinessProfilePage } from '../../../modals/reciever-profile/business/profile/profile.page';

BusinessLogoPage
BusinessPaymentPage
BusinessProfilePage

interface Reciever {
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
  reciever: Reciever = {
    usertype: 'Reciever',
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

          this.profile.recieverProfile.firstName.next(firstName);
          this.profile.recieverProfile.lastName.next(lastName);
          this.profile.recieverProfile.phone.next(phone);
          this.profile.recieverProfile.email.next(email);
          this.profile.recieverProfile.password.next(password);
          this.profile.recieverProfile.profilePicture.next(profilePicture);
          this.profile.recieverProfile.stripeToken.next(stripeToken);
          this.profile.recieverProfile.card.next(stripeToken[0].card);
          this.profile.recieverProfile.businessName.next(businessName);
          this.profile.recieverProfile.businessAddressOne.next(businessAddressOne);
          this.profile.recieverProfile.businessAddressTwo.next(businessAddressTwo);
          this.profile.recieverProfile.businessCity.next(businessCity);
          this.profile.recieverProfile.businessState.next(businessState);
          this.profile.recieverProfile.businessZip.next(businessZip);
          this.profile.recieverProfile.businessLogo.next(businessLogo);

          // Subscribe to all the B.Subjects to get live updates of value changes.
          this.profile.recieverProfile.firstName.subscribe(data => {this.reciever.firstName = data;});
          this.profile.recieverProfile.lastName.subscribe(data => {this.reciever.lastName = data;});
          this.profile.recieverProfile.phone.subscribe(data => {this.reciever.phone = data;});
          this.profile.recieverProfile.email.subscribe(data => {this.reciever.email = data;});
          this.profile.recieverProfile.password.subscribe(data => {this.reciever.password = data;});
          this.profile.recieverProfile.stripeToken.subscribe(data => {this.reciever.stripeToken = data;});
          this.profile.recieverProfile.card.subscribe(data => {this.reciever.card = data;});
          this.profile.recieverProfile.businessAddressOne.subscribe(data => {this.reciever.businessAddressOne = data;});
          this.profile.recieverProfile.businessAddressTwo.subscribe(data => {this.reciever.businessAddressTwo = data;});
          this.profile.recieverProfile.businessCity.subscribe(data => {this.reciever.businessCity = data;});
          this.profile.recieverProfile.businessState.subscribe(data => {this.reciever.businessState = data;});
          this.profile.recieverProfile.businessZip.subscribe(data => {this.reciever.businessZip = data;});
          this.profile.recieverProfile.businessLogo.subscribe(data => {this.reciever.businessLogo = data;});
          this.profile.recieverProfile.businessPhone.subscribe(data => {this.reciever.businessPhone = data;});
          this.profile.recieverProfile.businessName.subscribe(data => {this.reciever.businessName = data;});
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
        profilePicture: this.reciever.profilePicture
      }
    });
    return await modal.present();
  }
  async nameModal() {
    const modal = await this.modalController.create({
      component: NamePage,
      cssClass: 'my-custom-class',
      componentProps: {
        firstName: this.reciever.firstName,
        lastName: this.reciever.lastName,
        email: this.reciever.email
      }
    });
    return await modal.present();
  }
  async emailModal() {
    const modal = await this.modalController.create({
      component: EmailPage,
      cssClass: 'my-custom-class',
      componentProps: {
        email: this.reciever.email
      }
    });
    return await modal.present();
  }
  async phoneModal() {
    const modal = await this.modalController.create({
      component: PhonePage,
      cssClass: 'my-custom-class',
      componentProps: {
        phone: this.reciever.phone,
        email: this.reciever.email
      }
    });
    return await modal.present();
  }
  async passwordModal() {
    const modal = await this.modalController.create({
      component: PasswordPage,
      cssClass: 'my-custom-class',
      componentProps: {
        password: this.reciever.password,
        email: this.reciever.email
      }
    });
    return await modal.present();
  }
  async businessProfileModal() {
    const modal = await this.modalController.create({
      component: BusinessProfilePage,
      cssClass: 'my-custom-class',
      componentProps: {
        businessName: this.reciever.businessName,
        businessAddressOne: this.reciever.businessAddressOne,
        businessAddressTwo: this.reciever.businessAddressTwo,
        businessCity: this.reciever.businessCity,
        businessZip: this.reciever.businessZip,
        businessState: this.reciever.businessState,
        businessPhone: this.reciever.businessPhone,
        email: this.reciever.email
      }
    });
    return await modal.present();
  }
  async businessLogoModal() {
    const modal = await this.modalController.create({
      component: BusinessLogoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        businessLogo: this.reciever.businessLogo,
        email: this.reciever.email
      }
    });
    return await modal.present();
  }
  async paymentModal() {
    const modal = await this.modalController.create({
      component: BusinessPaymentPage,
      cssClass: 'my-custom-class',
      componentProps: {
        stripeToken: this.reciever.stripeToken,
        email: this.reciever.email
      }
    });
    return await modal.present();
  }

}
