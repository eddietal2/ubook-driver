import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrierPastReviewsPage } from './carrier-past-reviews.page';

describe('CarrierPastReviewsPage', () => {
  let component: CarrierPastReviewsPage;
  let fixture: ComponentFixture<CarrierPastReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierPastReviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrierPastReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
