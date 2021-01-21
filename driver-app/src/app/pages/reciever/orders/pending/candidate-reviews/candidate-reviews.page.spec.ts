import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CandidateReviewsPage } from './candidate-reviews.page';

describe('CandidateReviewsPage', () => {
  let component: CandidateReviewsPage;
  let fixture: ComponentFixture<CandidateReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateReviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
