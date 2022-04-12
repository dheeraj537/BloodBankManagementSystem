import { TestBed } from '@angular/core/testing';

import { HospitalControllerService } from './hospital-controller.service';

describe('HospitalControllerService', () => {
  let service: HospitalControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospitalControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
