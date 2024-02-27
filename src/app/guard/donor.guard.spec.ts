import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; 
import { DonorGuard } from './donor.guard';
import { AuthService } from '../components/service/auth.service';

describe('DonorGuard', () => {
  let guard: DonorGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [DonorGuard, AuthService]
    });

    guard = TestBed.inject(DonorGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access for donor users', () => {
    spyOn(authService, 'getUserRole').and.returnValue('donateur');
    expect(guard.canActivate()).toBe(true);
  });

  it('should redirect to home page for non-donor users', () => {
    spyOn(authService, 'getUserRole').and.returnValue('admin');
    const navigateSpy = spyOn(router, 'navigate');

    expect(guard.canActivate()).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/acceuil']);
  });
});
