import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CandidateNegotiationPage } from './candidate-negotiation.page';

describe('CandidateNegotiationPage', () => {
  let component: CandidateNegotiationPage;
  let fixture: ComponentFixture<CandidateNegotiationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateNegotiationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateNegotiationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
