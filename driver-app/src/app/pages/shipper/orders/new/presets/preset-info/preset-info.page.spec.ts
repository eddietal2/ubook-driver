import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresetInfoPage } from './preset-info.page';

describe('PresetInfoPage', () => {
  let component: PresetInfoPage;
  let fixture: ComponentFixture<PresetInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresetInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
