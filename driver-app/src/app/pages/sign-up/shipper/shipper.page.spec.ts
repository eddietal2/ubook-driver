import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShipperPage } from './shipper.page';

describe('ShipperPage', () => {
  let component: ShipperPage;
  let fixture: ComponentFixture<ShipperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipperPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShipperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
