import { Component, OnInit, Input } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;
import { ProfileService } from '../../../../services/profile.service';


@Component({
  selector: 'app-picture',
  templateUrl: './picture.page.html',
  styleUrls: ['./picture.page.scss'],
})
export class PicturePage implements OnInit {
  imageSrc;
  uploadedPhoto = false;
  @Input() email: string;
  @Input() profilePicture: string;

  constructor(
    private toastController: ToastController,
    private modalController: ModalController,
    private profile: ProfileService) { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });
    console.log(image);
    var imageUrl = image.dataUrl;
    // TODO
    // Crop the image in a 1:1 ratio
    // Save dataurl to another format
    this.imageSrc = imageUrl;
    this.uploadedPhoto = false;
  }
  editProfilePicture() {
    // TODO
    // Update Picture format
    console.log('Attemtping to Edit Profile Picture');
    this.profile.editBusinessLogo('Shipper', this.email, this.imageSrc).subscribe(
      data => {
        console.log(data);
        this.profile.shipperProfile.profilePicture.next(data['profilePicture']);
        this.modalController.dismiss();
        this.presentToast();
      }
    )
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your phone has been updated!',
      cssClass: 'success-toast',
      duration: 2000
    });
    toast.present();
  }
}
