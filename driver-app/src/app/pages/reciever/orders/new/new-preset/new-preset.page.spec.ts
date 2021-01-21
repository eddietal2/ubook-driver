import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewPresetPage } from './new-preset.page';

describe('NewPresetPage', () => {
  let component: NewPresetPage;
  let fixture: ComponentFixture<NewPresetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPresetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewPresetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
