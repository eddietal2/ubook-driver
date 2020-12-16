import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { Plugins, CameraResultType } from '@capacitor/core';
import { RegisterService } from '../../../../services/register.service';

const { Camera } = Plugins;




@Component({
  selector: 'app-license',
  templateUrl: './license.page.html',
  styleUrls: ['./license.page.scss'],
})
export class LicensePage implements OnInit {
  name: string;
  licenseForm: FormGroup;

  constructor(
    private router: Router,
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.name = this.registerService.newCarrier.name;

    this.licenseForm = this.formBuilder.group({
      licenseNumber: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]]
    });
  }

  profilePage() {
    this.router.navigate(['/sign-up/enter-code-carrier/:usertype/:phone/:email/license/profile']);
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    let imageUrl = image.webPath;
    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
  }

}
