import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DotPage } from './dot.page';

describe('DotPage', () => {
  let component: DotPage;
  let fixture: ComponentFixture<DotPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
