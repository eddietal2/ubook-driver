import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReviewPresetPage } from './review-preset.page';

describe('ReviewPresetPage', () => {
  let component: ReviewPresetPage;
  let fixture: ComponentFixture<ReviewPresetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewPresetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReviewPresetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
