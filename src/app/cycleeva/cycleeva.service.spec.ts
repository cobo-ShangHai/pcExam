import { TestBed, inject } from '@angular/core/testing';

import { CycleevaService } from './cycleeva.service';

describe('CycleevaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CycleevaService]
    });
  });

  it('should be created', inject([CycleevaService], (service: CycleevaService) => {
    expect(service).toBeTruthy();
  }));
});
