import { TestBed, inject } from '@angular/core/testing';

import { AccessServiceService } from './access-service.service';

describe('AccessServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessServiceService]
    });
  });

  it('should ...', inject([AccessServiceService], (service: AccessServiceService) => {
    expect(service).toBeTruthy();
  }));
});
