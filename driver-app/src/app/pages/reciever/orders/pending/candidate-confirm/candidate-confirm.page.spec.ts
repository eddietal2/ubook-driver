import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CandidateConfirmPage } from './candidate-confirm.page';

describe('CandidateConfirmPage', () => {
  let component: CandidateConfirmPage;
  let fixture: ComponentFixture<CandidateConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateConfirmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
