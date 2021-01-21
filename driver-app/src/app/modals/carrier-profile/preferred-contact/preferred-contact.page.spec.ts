import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreferredContactPage } from './preferred-contact.page';

describe('PreferredContactPage', () => {
  let component: PreferredContactPage;
  let fixture: ComponentFixture<PreferredContactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferredContactPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreferredContactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
