import { TestBed } from '@angular/core/testing';

import { DonateurService } from './donateur.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('DonateurService', () => {
  let service: DonateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
    });
    service = TestBed.inject(DonateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
