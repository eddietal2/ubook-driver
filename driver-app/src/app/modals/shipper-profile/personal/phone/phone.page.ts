import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { ProfileService } from '../../../../services/profile.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.page.html',
  styleUrls: ['./phone.page.scss'],
})
export class PhonePage implements OnInit {
  editPhoneForm: FormGroup;
  @Input() email: string;
  @Input() phone: string;

  constructor(
    private modalController: ModalController,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private profile: ProfileService,
    private toastController: ToastController) { }

  ngOnInit() {
    console.log(this.phone);
    this.editPhoneForm =  this.formBuilder.group({
      newPhone: [this.phone],
    });
  }
  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  editPhone() {
    // TODO
    // Update JSON Token with updated phone
    console.log('Attemtping to Phone Email');
    this.profile.editPhone('Shipper', this.email, this.editPhoneForm.controls['newPhone'].value).subscribe(
      data => {
        console.log(data);
        this.profile.shipperProfile.phone.next(data['phone']);
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
