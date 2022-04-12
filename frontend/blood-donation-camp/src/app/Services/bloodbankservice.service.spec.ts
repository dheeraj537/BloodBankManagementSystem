import { TestBed } from '@angular/core/testing';

import { BloodbankserviceService } from './bloodbankservice.service';

describe('BloodbankserviceService', () => {
  let service: BloodbankserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodbankserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
