import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadedPage } from './loaded.page';

describe('LoadedPage', () => {
  let component: LoadedPage;
  let fixture: ComponentFixture<LoadedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
