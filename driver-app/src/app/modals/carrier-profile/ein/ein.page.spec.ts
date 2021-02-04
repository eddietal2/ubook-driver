import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EinPage } from './ein.page';

describe('EinPage', () => {
  let component: EinPage;
  let fixture: ComponentFixture<EinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
