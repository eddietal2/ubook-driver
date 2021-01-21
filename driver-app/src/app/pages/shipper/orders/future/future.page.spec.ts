import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FuturePage } from './future.page';

describe('FuturePage', () => {
  let component: FuturePage;
  let fixture: ComponentFixture<FuturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FuturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
