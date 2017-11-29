import { TestBed, inject } from '@angular/core/testing';

import { AccessControlLog } from './counter.service';

describe('CounterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessControlLog]
    });
  });

  it('should be created', inject([AccessControlLog], (service: AccessControlLog) => {
    expect(service).toBeTruthy();
  }));
});
