import { TestBed, inject } from '@angular/core/testing';

import { AccessLogsService } from './access-logs.service';

describe('AccessLogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessLogsService]
    });
  });

  it('should be created', inject([AccessLogsService], (service: AccessLogsService) => {
    expect(service).toBeTruthy();
  }));
});
