/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccessControlLogService } from './AccessControlLog.service';

describe('Service: AccessControlLog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessControlLogService]
    });
  });

  it('should ...', inject([AccessControlLogService], (service: AccessControlLogService) => {
    expect(service).toBeTruthy();
  }));
});
