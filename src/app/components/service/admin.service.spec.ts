import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule
import { AdminService } from './admin.service';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], // Ajouter HttpClientModule aux imports
    });
    service = TestBed.inject(AdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
