import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverInfoPage } from './driver-info.page';

describe('DriverInfoPage', () => {
  let component: DriverInfoPage;
  let fixture: ComponentFixture<DriverInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
