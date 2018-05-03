/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServisioSusanaService } from './servisio-susana.service';

describe('Service: ServisioSusana', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServisioSusanaService]
    });
  });

  it('should ...', inject([ServisioSusanaService], (service: ServisioSusanaService) => {
    expect(service).toBeTruthy();
  }));
});
