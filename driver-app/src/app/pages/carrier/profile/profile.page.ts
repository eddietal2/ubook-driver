import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  usertype: any;
  name: string;
  email: string;
  phone: string;
  rating: string;

  constructor(
    private auth: AuthService,
    private toastController: ToastController,
    private profileService: ProfileService
  ) {
    this.email = this.auth.email;
    this.usertype = this.auth.usertype;
  }

  ngOnInit() {
    this.profileService.getProfile(this.usertype, this.email).subscribe(user => {
      this.name = user['name'];
      this.phone = user['phone'];
      this.rating = user['rating'];
    });
  }

  

}
