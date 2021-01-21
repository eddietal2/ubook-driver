import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreAvailabilitySurveyPage } from './pre-availability-survey.page';

describe('PreAvailabilitySurveyPage', () => {
  let component: PreAvailabilitySurveyPage;
  let fixture: ComponentFixture<PreAvailabilitySurveyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreAvailabilitySurveyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreAvailabilitySurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
