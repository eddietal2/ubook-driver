import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-respond-with-rate',
  templateUrl: './respond-with-rate.page.html',
  styleUrls: ['./respond-with-rate.page.scss'],
})
export class RespondWithRatePage implements OnInit {
  @ViewChild('rateAdjuster') rateAdjuster;
  rateForm: FormGroup;
  rateInput;
  shipperRate = 1500;
  carrierRate;
  timerLoading = true;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private alertController: AlertController,
    ) { }

  ngOnInit() {

    this.rateForm = this.formBuilder.group({
      rate: [1500]
    });

    // After 3 seconds, disable to progress spinner for the timer.
    setTimeout(() => {
      this.timerLoading = false;
    }, 2000)


    this.rateInput = document.getElementById('rate');
    

    // Set the date we're counting down to
    var countDownDate = new Date().getTime();
    console.log(countDownDate)

    // Update the count down every 1 second
    var timer = setInterval(async function() {
      // Get today's date and time
      let now = new Date().getTime();
      // Find the distance between now and the count down date
      let distance = now - countDownDate;
      // console.log(distance);
      // Time calculations minutes and seconds
      let minutes = 10 + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Minutes 10 - 15, add a 0 to the minutes timer
      if (minutes <= 10) {
        document.getElementById("timer").innerHTML = '0' + minutes.toString() + ' : ' + ' ' + '0' + seconds.toString();
      }
      if (minutes <= 10 && seconds > 9) {
        document.getElementById("timer").innerHTML = '0' + minutes.toString() + ' : ' + ' ' + seconds.toString();
      }
      if (minutes >= 10 ) {
        document.getElementById("timer").innerHTML = minutes.toString() + ' : ' + ' ' + seconds.toString();
      }
      if (minutes >= 10 && seconds <= 9) {
        document.getElementById("timer").innerHTML = minutes.toString() + ' : ' + ' ' + '0'  + seconds.toString();
      }
      if (minutes >= 10 && minutes <= 15) {
        document.getElementById("timer-wrapper").style.background = "rgb(255 243 239)";
        document.getElementById("timer-wrapper").style.border = "5px solid orangered";
        document.getElementById("timer").style.color = "orangered";
        document.getElementById("timer").style.top = "10px";
      }
      // When timer expires after 15 minutes
      if (minutes >= 15) {

        // Animation for expired Timer.
        document.getElementById("timer").innerHTML = "Expired.";
        document.getElementById("timer-wrapper").style.background = "white";
        document.getElementById("timer-wrapper").style.border = "3px solid #D72F37";
        document.getElementById("timer").style.color = "#D72F37";
        document.getElementById("timer-wrapper").style.transform = "translateY(-20px) scale(1.2)";
        document.getElementById("timer-wrapper").style.animationTimingFunction = "cubic-bezier(0.075, 0.82, 0.165, 1)"
        clearInterval(timer)

     function expiredNotification() {
        var options = {
          body: 'Created by Eddie Taliaferro',
          icon: '/Users/ferro/Desktop/ubook-master/ubook-driver/driver-app/src/assets/3-dot-icon-inactive.svg',
          vibrate: 1
        }
        let notif = new Notification('Order Expired', options);
        setTimeout(this.expiredNotification, 1000);
    }
    expiredNotification()
      }
    }, 1000);
  }
  submitRate() {
    // 
    // this.router.navigate(['liability'])
  }
  async declineToast() {
    const toast = await this.toastController.create({
      message: 'You have declined an order.',
      cssClass: 'danger-toast',
      duration: 2000
    });
    toast.present();
  }
  async submitToast() {
    const toast = await this.toastController.create({
      message: 'You have submitted a rate.',
      cssClass: 'success-toast',
      duration: 2000
    });
    toast.present();
  }
  async declineLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading-danger',
      message: 'Declining Order ...',
      duration: 2000
    });
    await loading.present();

    await loading.onDidDismiss().then(
      () => {
        this.declineToast();
        this.router.navigate(['carrier-home'])
      })
      .catch((e) => {
        throw Error(e);
      }
      );
    console.log('Loading dismissed!');
  }
  async submitLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading-success',
      message: 'Submitting Rate',
      duration: 2000
    });
    await loading.present();

    await loading.onDidDismiss().then(
      () => {
        this.rateInput.getInputElement()
        .then(
          (e) => {
            let finalRate = parseInt(e.value, 10);
            console.log('Final Rate:\n');
            console.log(finalRate);
            this.submitToast();
            // Pass on final rate in params
            this.router.navigate(['carrier-home'])
          })
        .catch((e) => {
          throw Error(e);
        }
        )
      })
      .catch((e) => {
        throw Error(e);
      }
      );
    console.log('Loading dismissed!');
  }
  logRate(e) {
    console.log(e);
    if(e.detail.value === '1500') {
      console.log('wassup');
    }
  }
  incrementRate() {
    this.rateForm.controls.rate.setValue(this.rateForm.controls.rate.value + 5);
  }
  decrementRate() {
    this.rateForm.controls.rate.setValue(this.rateForm.controls.rate.value - 5);
  }
  async expiredAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel']
    });

    await alert.present();
  }
  async submitRateAlert() {
    this.rateInput = document.getElementById('rate');
    const alert = await this.alertController.create({
      cssClass: 'default-alert',
      header: 'Submit Rate?',
      message: `Your rate will be $${this.rateForm.controls.rate.value}`,
      buttons: [{
        text: 'Submit',
        role: 'submit',
        handler: () => {
          // Pass param to open bottom drawer when this is submitted?
          this.submitToast();
          this.router.navigate(['carrier-home']);
        }},
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

}
