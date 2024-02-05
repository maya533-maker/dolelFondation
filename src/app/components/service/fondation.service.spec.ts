import { TestBed } from '@angular/core/testing';

import { FondationService } from './fondation.service';

describe('FondationService', () => {
  let service: FondationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FondationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
