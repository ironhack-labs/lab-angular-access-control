import { TestBed, inject } from '@angular/core/testing';

import { LockerControlService } from './locker-control.service';

describe('LockerControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LockerControlService]
    });
  });

  it('should be created', inject([LockerControlService], (service: LockerControlService) => {
    expect(service).toBeTruthy();
  }));
});
