import { TestBed, inject } from '@angular/core/testing';

import { ToLogInService } from './to-log-in.service';

describe('ToLogInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToLogInService]
    });
  });

  it('should be created', inject([ToLogInService], (service: ToLogInService) => {
    expect(service).toBeTruthy();
  }));
});
