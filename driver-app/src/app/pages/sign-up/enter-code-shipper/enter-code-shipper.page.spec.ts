import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterCodeShipperPage } from './enter-code-shipper.page';

describe('EnterCodeShipperPage', () => {
  let component: EnterCodeShipperPage;
  let fixture: ComponentFixture<EnterCodeShipperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterCodeShipperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterCodeShipperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
