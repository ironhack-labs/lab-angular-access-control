import { TestBed } from '@angular/core/testing';

import { AccessControlLogService } from './access-control-log.service';

describe('AccessControlLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccessControlLogService = TestBed.get(AccessControlLogService);
    expect(service).toBeTruthy();
  });
});
