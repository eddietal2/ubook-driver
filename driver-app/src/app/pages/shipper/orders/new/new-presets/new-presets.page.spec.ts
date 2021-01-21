import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewPresetsPage } from './new-presets.page';

describe('NewPresetsPage', () => {
  let component: NewPresetsPage;
  let fixture: ComponentFixture<NewPresetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPresetsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewPresetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
