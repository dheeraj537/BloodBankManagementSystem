import { TestBed } from '@angular/core/testing';

import { LogincontrollerService } from './logincontroller.service';

describe('LogincontrollerService', () => {
  let service: LogincontrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogincontrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
