import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MonComposantComponent } from './mon-composant.component';
import { AdminService } from '../components/service/admin.service';
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule
import { of } from 'rxjs';
import { DashAdComponent } from '../components/Admin/dash-ad/dash-ad.component';

describe('MonComposantComponent', () => {
  let component: MonComposantComponent;
  let fixture: ComponentFixture<MonComposantComponent>;
  let adminService: AdminService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonComposantComponent, DashAdComponent],
      imports: [HttpClientModule], // Ajouter HttpClientModule ici
      providers: [AdminService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonComposantComponent);
    component = fixture.componentInstance;
    adminService = TestBed.inject(AdminService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load comptes on init', () => {
    const mockComptes = [{ id: 1, name: 'Test' }];
    spyOn(adminService, 'getListeCompteAReactiver').and.returnValue(
      of({ data: mockComptes })
    );

    component.ngOnInit();

    expect(component.comptes).toEqual(mockComptes);
  });

  it('should reactiver compte', () => {
    const userId = 1;
    const mockResponse = { message: 'Compte réactivé avec succès' };
    spyOn(adminService, 'reactiverCompte').and.returnValue(of(mockResponse));

    component.reactiverCompte(userId);

    expect(adminService.reactiverCompte).toHaveBeenCalledWith(userId);
    // Vous pouvez ajouter des assertions supplémentaires ici en fonction de votre logique de réactivation de compte
  });
});
