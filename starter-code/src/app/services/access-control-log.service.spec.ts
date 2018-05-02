import { TestBed, inject } from '@angular/core/testing';

import { AccessControlLogService } from './access-control-log.service';

describe('AccessControlLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessControlLogService]
    });
  });

  it('should be created', inject([AccessControlLogService], (service: AccessControlLogService) => {
    expect(service).toBeTruthy();
  }));
});
