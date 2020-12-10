import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnterCodeCarrierPage } from './enter-code-carrier.page';

describe('EnterCodeCarrierPage', () => {
  let component: EnterCodeCarrierPage;
  let fixture: ComponentFixture<EnterCodeCarrierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterCodeCarrierPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnterCodeCarrierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
