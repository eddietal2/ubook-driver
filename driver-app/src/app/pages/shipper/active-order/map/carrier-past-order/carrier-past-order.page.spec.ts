import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrierPastOrderPage } from './carrier-past-order.page';

describe('CarrierPastOrderPage', () => {
  let component: CarrierPastOrderPage;
  let fixture: ComponentFixture<CarrierPastOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierPastOrderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrierPastOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
