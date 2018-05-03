import { TestBed, inject } from '@angular/core/testing';

import { CreationService } from './creation.service';

describe('CreationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreationService]
    });
  });

  it('should be created', inject([CreationService], (service: CreationService) => {
    expect(service).toBeTruthy();
  }));
});
