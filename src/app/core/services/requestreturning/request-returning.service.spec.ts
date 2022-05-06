import { TestBed } from '@angular/core/testing';

import { RequestReturningService } from './request-returning.service';

describe('RequestReturningService', () => {
  let service: RequestReturningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestReturningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
