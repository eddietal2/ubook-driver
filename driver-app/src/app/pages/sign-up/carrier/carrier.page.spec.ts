import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrierPage } from './carrier.page';

describe('CarrierPage', () => {
  let component: CarrierPage;
  let fixture: ComponentFixture<CarrierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
