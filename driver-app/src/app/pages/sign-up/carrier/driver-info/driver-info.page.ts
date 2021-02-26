import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Plugins, CameraResultType } from "@capacitor/core";
const { Camera } = Plugins;

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.page.html',
  styleUrls: ['./driver-info.page.scss'],
})
export class DriverInfoPage implements OnInit {
  carrierDriverInfoForm: FormGroup;
  imageSrcFront;
  imageSrcBack;
  uploadedPhotoFront = false;
  uploadedPhotoBack = false;
  licenseState: string;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,) { }

  ngOnInit() {
    this.carrierDriverInfoForm = this.formBuilder.group({
      licenseNumber: ['', [Validators.required]],
      // mc: ['', [Validators.required]],
    })
  }
  async takePictureFront() {
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
    this.imageSrcFront = imageUrl;
    this.uploadedPhotoFront = true;
  }
  async takePictureBack() {
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
    this.imageSrcBack = imageUrl;
    this.uploadedPhotoBack = true;
  }
  selectStateOption(e) {
    console.log(e);
    this.licenseState = e.detail.value;
  }
  paymentInfo() {
    // /sign-up/carrier/
    this.auth.carrierSignUp.driverLicenseNumber = this.carrierDriverInfoForm.controls['licenseNumber'].value;
    this.auth.carrierSignUp.driverLicenseState = this.licenseState;
    this.auth.carrierSignUp.driverLicenseFrontPhoto = this.imageSrcFront;
    this.auth.carrierSignUp.driverLicenseBackPhoto = this.imageSrcBack;
    this.router.navigate(['/sign-up/carrier/payment-info']);
    console.log(this.auth.carrierSignUp);
  }
  cancel() {
  this.router.navigate(['/sign-up']);
  }

}
