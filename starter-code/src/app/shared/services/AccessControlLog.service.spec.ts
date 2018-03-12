import { TestBed, inject } from '@angular/core/testing';

import { AccessControl.ServiceService } from './access-control.service.service';

describe('AccessControl.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessControl.ServiceService]
    });
  });

  it('should be created', inject([AccessControl.ServiceService], (service: AccessControl.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
