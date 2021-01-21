import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverLicensePage } from './driver-license.page';

describe('DriverLicensePage', () => {
  let component: DriverLicensePage;
  let fixture: ComponentFixture<DriverLicensePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverLicensePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverLicensePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
