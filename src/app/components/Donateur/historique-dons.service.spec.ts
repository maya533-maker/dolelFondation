import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; 
import { HistoriqueDonsService } from './historique-dons.service';

describe('HistoriqueDonsService', () => {
  let service: HistoriqueDonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(HistoriqueDonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
