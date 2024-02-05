import { TestBed } from '@angular/core/testing';

import { FondationsListService } from './fondations-list.service';

describe('FondationsListService', () => {
  let service: FondationsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FondationsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
