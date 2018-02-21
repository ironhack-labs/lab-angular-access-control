import { TestBed, inject } from '@angular/core/testing';

import { AccesControlService } from './acces-control.service';

describe('AccesControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccesControlService]
    });
  });

  it('should be created', inject([AccesControlService], (service: AccesControlService) => {
    expect(service).toBeTruthy();
  }));
});
