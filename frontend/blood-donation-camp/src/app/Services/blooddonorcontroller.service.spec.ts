import { TestBed } from '@angular/core/testing';

import { BlooddonorcontrollerService } from './blooddonorcontroller.service';

describe('BlooddonorcontrollerService', () => {
  let service: BlooddonorcontrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlooddonorcontrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
