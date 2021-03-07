import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ProfileService } from '../../../services/profile.service';


@Component({
  selector: 'app-name',
  templateUrl: './name.page.html',
  styleUrls: ['./name.page.scss'],
})
export class NamePage implements OnInit {
  editNameForm: FormGroup;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() email: string;

  constructor(
    private modalController: ModalController,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private profile: ProfileService,
    private toastController: ToastController) { }

  ngOnInit() {
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.email);

    this.editNameForm =  this.formBuilder.group({
      firstName: [this.firstName],
      lastName: [this.lastName]
    });
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  editName() {
    console.log('Attemtping to Edit Name');
    this.profile.editName('Carrier', this.email, this.editNameForm.controls['firstName'].value, this.editNameForm.controls['lastName'].value).subscribe(
      data => {
        console.log(data);
        this.profile.carrierProfile.firstName.next(data['firstName']);
        this.profile.carrierProfile.lastName.next(data['lastName']);
        this.modalController.dismiss();
        this.presentToast();
      }
    )
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your name has been updated!',
      cssClass: 'success-toast',
      duration: 2000
    });
    toast.present();
  }

}
