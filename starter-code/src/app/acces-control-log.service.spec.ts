import { TestBed, inject } from '@angular/core/testing';

import { AccesControlLogService } from './acces-control-log.service';

describe('AccesControlLogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccesControlLogService]
    });
  });

  it('should be created', inject([AccesControlLogService], (service: AccesControlLogService) => {
    expect(service).toBeTruthy();
  }));
});
