import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrierReviewsPage } from './carrier-reviews.page';

describe('CarrierReviewsPage', () => {
  let component: CarrierReviewsPage;
  let fixture: ComponentFixture<CarrierReviewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierReviewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrierReviewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
