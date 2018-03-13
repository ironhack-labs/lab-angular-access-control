import { TestBed, inject } from '@angular/core/testing';

import { AccessControlLog } from './AccessControlLog.service';

describe('AccessControlLog ', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessControlLog]
    });
  });

  it('should be created', inject([AccessControlLog], (service: AccessControlLog) => {
    expect(service).toBeTruthy();
  }));
});
