import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Plugins, CameraResultType } from "@capacitor/core";
import { AuthService } from '../../../../../services/auth.service';
import { NewService } from '../../../../../services/orders/new.service';
const { Camera } = Plugins;


@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {
  photo1;
  photo2;
  photo3;
  photo4;
  photo5;
  orderPhotos = [];

  constructor(
    private alertController: AlertController,
    private router: Router,
    private newService: NewService) { }

  ngOnInit() {
  }
  review()  {
    this.newService.newOrder.photos = this.orderPhotos;
    console.log(this.newService.newOrder)
    this.router.navigate(['/shipper-orders/new/review']);
  }
  async takePhoto1() {
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
    this.photo1 = imageUrl;
    // this.orderPhotos.push(this.photo1)
    this.orderPhotos.push('<PHOTO>')
    console.log(this.orderPhotos)
  }
  async takePhoto2() {
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
    this.photo2 = imageUrl;
    // this.orderPhotos.push(this.photo2)
    this.orderPhotos.push('<PHOTO>')
    console.log(this.orderPhotos)
  }
  async takePhoto3() {
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
    this.photo3 = imageUrl;
    // this.orderPhotos.push(this.photo3)
    this.orderPhotos.push('<PHOTO>')
    console.log(this.orderPhotos)
  }
  async takePhoto4() {
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
    this.photo4 = imageUrl;
    // this.orderPhotos.push(this.photo4)
    this.orderPhotos.push('<PHOTO>')
    console.log(this.orderPhotos)
  }
  async takePhoto5() {
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
    this.photo5 = imageUrl;
    // this.orderPhotos.push(this.photo5)
    this.orderPhotos.push('<PHOTO>')
    console.log(this.orderPhotos)
  }
  async twoPicturesAlert() {
    const alert = await this.alertController.create({
      cssClass: 'skip-alert',
      header: 'Skip Logo Upload',
      message: 'Are you sure you want to Skip uploading a Profile Picture? You can always add one later.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
