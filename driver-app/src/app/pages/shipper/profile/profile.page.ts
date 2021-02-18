import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PhonePage } from '../../../modals/shipper-profile/business/phone/phone.page';
import { EmailPage } from '../../../modals/shipper-profile/personal/email/email.page';
import { NamePage } from '../../../modals/shipper-profile/personal/name/name.page';
import { PicturePage } from '../../../modals/shipper-profile/personal/picture/picture.page';
import { RatingPage } from '../../../modals/shipper-profile/rating/rating.page';
import { AuthService } from '../../../services/auth.service';
import { ProfileService } from '../../../services/profile.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    public modalController: ModalController,
    private auth: AuthService,
    private toastController: ToastController,
    private profileService: ProfileService) { }

  ngOnInit() {
  }
  async ratingModal() {
    const modal = await this.modalController.create({
      component: RatingPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  profilePictureModal() {
    
  }
  nameModal() {
    
  }
  emailModal() {
    
  }
  phoneModal() {
    
  }
  preferredContactModal() {
    
  }
  driverLicenseModal() {
    
  }
  mcModal() {
    
  }
  einModal() {
    
  }
  dotModal() {
    
  }
  insuranceModal() {
    
  }
  passwordModal() {
    
  }

}
