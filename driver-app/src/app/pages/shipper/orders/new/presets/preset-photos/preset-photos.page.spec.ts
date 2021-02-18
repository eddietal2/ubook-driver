import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresetPhotosPage } from './preset-photos.page';

describe('PresetPhotosPage', () => {
  let component: PresetPhotosPage;
  let fixture: ComponentFixture<PresetPhotosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetPhotosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresetPhotosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
