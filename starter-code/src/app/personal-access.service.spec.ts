import { TestBed, inject } from '@angular/core/testing';

import { PersonalAccessService } from './personal-access.service';

describe('PersonalAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonalAccessService]
    });
  });

  it('should be created', inject([PersonalAccessService], (service: PersonalAccessService) => {
    expect(service).toBeTruthy();
  }));
});
