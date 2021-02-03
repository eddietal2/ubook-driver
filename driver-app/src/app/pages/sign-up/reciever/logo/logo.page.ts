import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-logo',
  templateUrl: './logo.page.html',
  styleUrls: ['./logo.page.scss'],
})
export class LogoPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private router: Router) { }

  ngOnInit() {
  }
  recieverInfo() {
    this.router.navigate(['/sign-up/reciever/personal-info']);
  }
  cancel() {
    this.router.navigate(['/sign-up']);
  }

  async skipAlert() {
    const alert = await this.alertController.create({
      cssClass: 'skip-alert',
      header: 'Skip Logo Upload',
      message: 'Are you sure you want to Skip uploading a Logo? You can always add one later.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
