import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnloadedPage } from './unloaded.page';

describe('UnloadedPage', () => {
  let component: UnloadedPage;
  let fixture: ComponentFixture<UnloadedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnloadedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnloadedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
