import { TestBed, inject } from '@angular/core/testing';

import { LogkeeperService } from './logkeeper.service';

describe('LogkeeperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogkeeperService]
    });
  });

  it('should be created', inject([LogkeeperService], (service: LogkeeperService) => {
    expect(service).toBeTruthy();
  }));
});
