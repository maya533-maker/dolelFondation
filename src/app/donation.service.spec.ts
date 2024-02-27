import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Importez HttpClientModule

import { DonationService } from './donation.service';

describe('DonationService', () => {
  let service: DonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule] 
    });
    service = TestBed.inject(DonationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
