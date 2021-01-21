import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarrierInfoPage } from './carrier-info.page';

describe('CarrierInfoPage', () => {
  let component: CarrierInfoPage;
  let fixture: ComponentFixture<CarrierInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarrierInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
