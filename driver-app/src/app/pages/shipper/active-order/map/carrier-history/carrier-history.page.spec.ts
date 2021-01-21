import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrierHistoryPage } from './carrier-history.page';

describe('CarrierHistoryPage', () => {
  let component: CarrierHistoryPage;
  let fixture: ComponentFixture<CarrierHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrierHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
