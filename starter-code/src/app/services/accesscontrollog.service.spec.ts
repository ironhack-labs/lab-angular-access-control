import { TestBed, inject } from '@angular/core/testing';

import { AccesscontrollogService } from './accesscontrollog.service';

describe('AccesscontrollogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccesscontrollogService]
    });
  });

  it('should be created', inject([AccesscontrollogService], (service: AccesscontrollogService) => {
    expect(service).toBeTruthy();
  }));
});
