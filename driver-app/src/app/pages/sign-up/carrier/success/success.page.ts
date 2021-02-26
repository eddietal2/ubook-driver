import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(
    private router: Router,
    public toastController: ToastController) { }

  ngOnInit() {
  }
  async done() {
    await this.router.navigate(['']);
    await this.successToast();
  }
  async successToast() {
    const toast = await this.toastController.create({
      cssClass: 'success-login-toast',
      message: '<p style="display: inline; position: relative; top: -10px; left: 10px;">You can now log in.</p>',
      duration: 2000
    });
    toast.present();
  }



}
