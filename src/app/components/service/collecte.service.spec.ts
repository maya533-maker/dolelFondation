import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 

import { CollecteService } from './collecte.service';

describe('CollecteService', () => {
  let service: CollecteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(CollecteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
