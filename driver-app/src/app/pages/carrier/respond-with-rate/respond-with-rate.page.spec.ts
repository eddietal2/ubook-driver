import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RespondWithRatePage } from './respond-with-rate.page';

describe('RespondWithRatePage', () => {
  let component: RespondWithRatePage;
  let fixture: ComponentFixture<RespondWithRatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespondWithRatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RespondWithRatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
