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
    private auth: AuthService) { }

  ngOnInit() {
  }
  paymentInfo() {
    this.auth.recieverSignUp.profilePicture = this.imageSrc;
    console.log(this.auth.recieverSignUp);
    this.router.navigate(['/sign-up/reciever/payment']);
  }
  cancel() {
    this.router.navigate(['sign-up']);
  }
  async skipAlert() {
    const alert = await this.alertController.create({
      cssClass: 'skip-alert',
      header: 'Skip Logo Upload',
      message: 'Are you sure you want to Skip uploading a Profile Picture? You can always add one later.',
      buttons: ['OK']
    });

    await alert.present();
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

}
