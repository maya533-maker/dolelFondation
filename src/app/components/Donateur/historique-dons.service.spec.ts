import { TestBed } from '@angular/core/testing';

import { HistoriqueDonsService } from './historique-dons.service';

describe('HistoriqueDonsService', () => {
  let service: HistoriqueDonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoriqueDonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
