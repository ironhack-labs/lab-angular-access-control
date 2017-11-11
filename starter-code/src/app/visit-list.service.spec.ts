import { TestBed, inject } from '@angular/core/testing';

import { VisitListService } from './visit-list.service';

describe('VisitListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VisitListService]
    });
  });

  it('should be created', inject([VisitListService], (service: VisitListService) => {
    expect(service).toBeTruthy();
  }));
});
