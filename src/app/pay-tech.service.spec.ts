import { TestBed } from '@angular/core/testing';

import { PayTechService } from './pay-tech.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PayTechService', () => {
  let service: PayTechService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientModule],
    });
    service = TestBed.inject(PayTechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
