
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AccessServiceService } from './accessService.service';

describe('Service: AccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessServiceService]
    });
  });

  it('should ...', inject([AccessServiceService], (service: AccessServiceService) => {
    expect(service).toBeTruthy();
  }));
});
