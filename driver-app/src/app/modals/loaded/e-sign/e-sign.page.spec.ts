import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ESignPage } from './e-sign.page';

describe('ESignPage', () => {
  let component: ESignPage;
  let fixture: ComponentFixture<ESignPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ESignPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ESignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
