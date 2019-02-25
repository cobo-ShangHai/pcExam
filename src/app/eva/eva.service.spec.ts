import { TestBed, inject } from '@angular/core/testing';

import { EvaService } from './eva.service';

describe('EvaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvaService]
    });
  });

  it('should be created', inject([EvaService], (service: EvaService) => {
    expect(service).toBeTruthy();
  }));
});
