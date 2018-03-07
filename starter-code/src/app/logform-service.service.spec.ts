import { TestBed, inject } from '@angular/core/testing';

import { LogformServiceService } from './logform-service.service';

describe('LogformServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogformServiceService]
    });
  });

  it('should be created', inject([LogformServiceService], (service: LogformServiceService) => {
    expect(service).toBeTruthy();
  }));
});
