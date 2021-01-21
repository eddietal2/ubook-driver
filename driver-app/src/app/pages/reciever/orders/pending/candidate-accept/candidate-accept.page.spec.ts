import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CandidateAcceptPage } from './candidate-accept.page';

describe('CandidateAcceptPage', () => {
  let component: CandidateAcceptPage;
  let fixture: ComponentFixture<CandidateAcceptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateAcceptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CandidateAcceptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
