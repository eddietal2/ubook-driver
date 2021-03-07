import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { ProfileService } from '../../../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class BusinessProfilePage implements OnInit {
  editBusinessProfileForm: FormGroup;
  @Input() email: string;
  @Input() businessName: string;
  @Input() businessAddressOne: string;
  @Input() businessAddressTwo: string;
  @Input() businessCity: string;
  @Input() businessState: string;
  @Input() businessZip: string;
  @Input() businessPhone: string;

  constructor(
    private modalController: ModalController,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private profile: ProfileService,
    private toastController: ToastController) { }

  ngOnInit() {
    this.editBusinessProfileForm =  this.formBuilder.group({
      businessName: [this.businessName],
      businessAddressOne: [this.businessAddressOne],
      businessAddressTwo: [this.businessAddressTwo],
      businessCity: [this.businessCity],
      businessState: [this.businessState],
      businessZip: [this.businessZip],
      businessPhone: [this.businessPhone],
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
    this.profile.editBusinessProfile(
      'Shipper',
      this.email,
      this.editBusinessProfileForm.controls['businessName'].value,
      this.editBusinessProfileForm.controls['businessAddressOne'].value,
      this.editBusinessProfileForm.controls['businessAddressTwo'].value,
      this.editBusinessProfileForm.controls['businessCity'].value,
      this.editBusinessProfileForm.controls['businessZip'].value,
      this.editBusinessProfileForm.controls['businessState'].value,
      this.editBusinessProfileForm.controls['businessPhone'].value,
      ).subscribe(
      data => {
        console.log(data);
        this.profile.shipperProfile.businessName.next(data['businessName']);
        this.profile.shipperProfile.businessAddressOne.next(data['businessAddressOne']);
        this.profile.shipperProfile.businessAddressTwo.next(data['businessAddressTwo']);
        this.profile.shipperProfile.businessCity.next(data['businessCity']);
        this.profile.shipperProfile.businessZip.next(data['businessZip']);
        this.profile.shipperProfile.businessState.next(data['businessState']);
        this.profile.shipperProfile.businessPhone.next(data['businessPhone']);
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
