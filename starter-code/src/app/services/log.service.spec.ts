import { TestBed, inject } from '@angular/core/testing';

import { AccesControlLog } from './log.service';

describe('LogServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccesControlLog]
    });
  });

  it('should be created', inject([AccesControlLog], (service: AccesControlLog) => {
    expect(service).toBeTruthy();
  }));
});
