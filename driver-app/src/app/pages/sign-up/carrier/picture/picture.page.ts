import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.page.html',
  styleUrls: ['./picture.page.scss'],
})
export class PicturePage implements OnInit {
  imageSrc;
  uploadedPhoto = false;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
  ) { }

  ngOnInit() {

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
    this.uploadedPhoto = true;
  }
  driverInfo() {
    // /sign-up/carrier
    this.auth.carrierSignUp.profilePicture = this.imageSrc;
    console.log(this.auth.carrierSignUp);
    this.router.navigate(['/sign-up/carrier/driver-info']);
  }
  cancel() {
    this.router.navigate(['/sign-up']);
  }
  async skipAlert() {
    const alert = await this.alertController.create({
      cssClass: 'skip-alert',
      header: 'Skip Logo Upload',
      message: 'Are you sure you want to Skip uploading a Profile Picture? You can always add one later.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['/sign-up/carrier/driver-info']);
            this.auth.carrierSignUp.profilePicture = 'data:image/png;base64,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'
          }
        }

      ]
    });

    await alert.present();
  }

}
