import { TestBed } from '@angular/core/testing';

import { PendingPageUdateService } from './pending-page-udate.service';

describe('PendingPageUdateService', () => {
  let service: PendingPageUdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendingPageUdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
