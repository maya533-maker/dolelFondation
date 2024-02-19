import { TestBed } from '@angular/core/testing';

import { PayTechService } from './pay-tech.service';

describe('PayTechService', () => {
  let service: PayTechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayTechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
