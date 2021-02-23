import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-reviews',
  templateUrl: './candidate-reviews.page.html',
  styleUrls: ['./candidate-reviews.page.scss'],
})
export class CandidateReviewsPage implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit() {
  }
  back() {
    // Get Order ID to put as a Param in route?
    this.router.navigate(['']);
  }


}
