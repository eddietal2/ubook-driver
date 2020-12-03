import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-enter-code',
  templateUrl: './enter-code.page.html',
  styleUrls: ['./enter-code.page.scss'],
})
export class EnterCodePage implements OnInit {
  type;
  value;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit() {
    this.type = this.activatedRoute.snapshot.paramMap.get('type');
    this.value = this.activatedRoute.snapshot.paramMap.get('value');

    console.log(this.type);
    console.log(this.value);
    
  }

}
