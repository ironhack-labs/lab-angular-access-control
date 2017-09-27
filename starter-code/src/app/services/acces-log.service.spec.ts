import { TestBed, inject } from '@angular/core/testing';

import { AccesLogService } from './acces-log.service';

describe('AccesLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccesLogService]
    });
  });

  it('should be created', inject([AccesLogService], (service: AccesLogService) => {
    expect(service).toBeTruthy();
  }));
});
