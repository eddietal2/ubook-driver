import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-confirm',
  templateUrl: './candidate-confirm.page.html',
  styleUrls: ['./candidate-confirm.page.scss'],
})
export class CandidateConfirmPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  reviews() {
    this.router.navigate(['/shipper-orders/pending/candidate-reviews']);
  }
  acceptCandidate() {
    this.router.navigate(['/shipper-orders/pending/candidate-accept']);
  }

}
