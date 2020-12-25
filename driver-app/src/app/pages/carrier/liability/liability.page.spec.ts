import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiabilityPage } from './liability.page';

describe('LiabilityPage', () => {
  let component: LiabilityPage;
  let fixture: ComponentFixture<LiabilityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiabilityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiabilityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
