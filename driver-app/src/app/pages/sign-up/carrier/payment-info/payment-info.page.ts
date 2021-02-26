import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
declare var Stripe: any;
const testPubApiKey = 'pk_test_TYooMQauvdEDq54NiTphI7jx';
const testSecApiKey = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.page.html',
  styleUrls: ['./payment-info.page.scss'],
})
export class PaymentInfoPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router,
    private formBuilder: FormBuilder,
    private auth: AuthService,) { }

  ngOnInit() {

    var stripe = Stripe(testPubApiKey)
    console.log(stripe);

    if(stripe._keyMode === 'test') {
      console.log('Stripe is in TEST Mode \n');

    }
    if(stripe._keyMode === 'live') {
      console.log('Stripe is in LIVE Mode \n');
    }

    // Create `card` element that will watch for updates
    // and display error messages
    const elements = stripe.elements();
    const card = elements.create('card');
    card.mount('#card-element');
    var iframe = document.getElementsByTagName('iframe');
    var cardField = document.getElementsByClassName('CardField--ltr');
    console.log(cardField);
    // iframe[0].outerHTML = '<iframe name="__privateStripeFrame9085" frameborder="0" allowtransparency="true" scrolling="no" allowpaymentrequest="true" src="https://js.stripe.com/v3/elements-inner-card-3182bf84277d5ad13c6ffc7069fd59fc.html#wait=false&amp;rtl=false&amp;componentName=card&amp;keyMode=test&amp;apiKey=pk_test_TYooMQauvdEDq54NiTphI7jx&amp;referrer=http%3A%2F%2F10.0.1.4%3A4200%2F&amp;controllerId=__privateStripeController9081" title="Secure payment input frame" style="border: none !important; margin: 0 0 20px 0 !important; padding: 0px !important; width: 1px !important; min-width: 100% !important; overflow: hidden !important; display: block !important; user-select: none !important; will-change: transform !important; height: 45px;"></iframe>';
    card.addEventListener('change', event => {
      const displayError = document.getElementById('card-errors');
      if (event.error) {
        console.log(event);
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
    });

    // Listen for form submission, process the form with Stripe,
    // and get the
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', event => {
      event.preventDefault();
      stripe.createToken(card).then(result => {
        if (result.error) {
          console.log('Error creating payment method.');
          const errorElement = document.getElementById('card-errors');
          errorElement.textContent = result.error.message;
        } else {
          // At this point, you should send the token ID
          // to your server so it can attach
          // the payment source to a customer
          console.log('Token acquired!');
          console.log(result.token);
          console.log(result.token.id);
          this.presentLoading(result.token);
        }
      });
    });
  }
  async presentLoading(token) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
    this.auth.carrierSignUp.stripeToken = token;
    console.log(this.auth.carrierSignUp);

    loading.onDidDismiss().then(
      () => {
        this.router.navigate(['/sign-up/carrier/login-credentials']);
      }
    );
    console.log('Loading dismissed!');
  }
  cancel() {
  this.router.navigate(['/sign-up']);
  }
  async skipPaymentInfo() {
    const alert = await this.alertController.create({
      cssClass: 'skip-alert',
      header: 'Skip Logo Upload',
      message: 'Are you sure you want to Skip uploading a Profile Picture? You can always add one later.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
