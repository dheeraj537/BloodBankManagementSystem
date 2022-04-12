import { TestBed } from '@angular/core/testing';

import { BlooddonationcampService } from './blooddonationcamp.service';

describe('BlooddonationcampService', () => {
  let service: BlooddonationcampService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlooddonationcampService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
