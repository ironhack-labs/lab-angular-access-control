import { TestBed, inject } from '@angular/core/testing';

import { AccescontrollogService } from './accescontrollog.service';

describe('AccescontrollogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccescontrollogService]
    });
  });

  it('should be created', inject([AccescontrollogService], (service: AccescontrollogService) => {
    expect(service).toBeTruthy();
  }));
});
