import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ScaleTicketPage } from './scale-ticket.page';

describe('ScaleTicketPage', () => {
  let component: ScaleTicketPage;
  let fixture: ComponentFixture<ScaleTicketPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScaleTicketPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ScaleTicketPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
