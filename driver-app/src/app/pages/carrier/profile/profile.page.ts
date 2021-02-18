import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { DotPage } from '../../../modals/carrier-profile/dot/dot.page';
import { DriverLicensePage } from '../../../modals/carrier-profile/driver-license/driver-license.page';
import { EinPage } from '../../../modals/carrier-profile/ein/ein.page';
import { EmailPage } from '../../../modals/carrier-profile/email/email.page';
import { InsurancePage } from '../../../modals/carrier-profile/insurance/insurance.page';
import { McPage } from '../../../modals/carrier-profile/mc/mc.page';
import { NamePage } from '../../../modals/carrier-profile/name/name.page';
import { PasswordPage } from '../../../modals/carrier-profile/password/password.page';
import { PhonePage } from '../../../modals/carrier-profile/phone/phone.page';
import { PicturePage } from '../../../modals/carrier-profile/picture/picture.page';
import { PreferredContactPage } from '../../../modals/carrier-profile/preferred-contact/preferred-contact.page';
import { RatingPage } from '../../../modals/carrier-profile/rating/rating.page';
import { AuthService } from '../../../services/auth.service';
import { ProfileService } from '../../../services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  usertype: any;
  name: string;
  email;
  phone: string;
  rating: string;

  constructor(
    private auth: AuthService,
    public modalController: ModalController,
    private toastController: ToastController,
    private profileService: ProfileService
  ) {
    // For Quick Carrier Logins on Refresh. Delete during production
      // this.email = this.auth.email;
      // this.usertype = this.auth.usertype;

      this.email = 'eddielacrosse2@gmail.com';
      this.usertype = 'Carrier';
  }

  ngOnInit() {
    this.profileService.getProfile(this.usertype, this.email).subscribe(user => {
      this.name = user['name'];
      this.phone = user['phone'];
      this.rating = user['rating'];
    });
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
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async nameModal() {
    const modal = await this.modalController.create({
      component: NamePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async emailModal() {
    const modal = await this.modalController.create({
      component: EmailPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async phoneModal() {
    const modal = await this.modalController.create({
      component: PhonePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async preferredContactModal() {
    const modal = await this.modalController.create({
      component: PreferredContactPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async driverLicenseModal() {
    const modal = await this.modalController.create({
      component: DriverLicensePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async mcModal() {
    const modal = await this.modalController.create({
      component: McPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async einModal() {
    const modal = await this.modalController.create({
      component: EinPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async dotModal() {
    const modal = await this.modalController.create({
      component: DotPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async insuranceModal() {
    const modal = await this.modalController.create({
      component: InsurancePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async passwordModal() {
    const modal = await this.modalController.create({
      component: PasswordPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
