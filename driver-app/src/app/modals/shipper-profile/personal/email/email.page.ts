import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../../../services/profile.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.page.html',
  styleUrls: ['./email.page.scss'],
})
export class EmailPage implements OnInit {
  editEmailForm: FormGroup;
  @Input() email: string;

  constructor(
    private modalController: ModalController,
    private formBuilder: FormBuilder,
    private profile: ProfileService,
    private toastController: ToastController) { }

  ngOnInit() {
    console.log(this.email);
    this.editEmailForm =  this.formBuilder.group({
      newEmail: [this.email],
    });
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  editEmail() {
    // TODO
    // Update JSON Token with updated email
    console.log('Attemtping to Edit Email');
    this.profile.editEmail('Shipper', this.email, this.editEmailForm.controls['newEmail'].value).subscribe(
      data => {
        console.log(data);
        this.profile.shipperProfile.email.next(data['email']);
        this.modalController.dismiss();
        this.presentToast();
      }
    )
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your email has been updated!',
      cssClass: 'success-toast',
      duration: 2000
    });
    toast.present();
  }

}
