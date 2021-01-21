import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PresetsPage } from './presets.page';

describe('PresetsPage', () => {
  let component: PresetsPage;
  let fixture: ComponentFixture<PresetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PresetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
