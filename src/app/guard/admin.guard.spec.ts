import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { AdminGuard } from './admin.guard';
import { AuthService } from '../components/service/auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('AdminGuard', () => {
  let guard: AdminGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      providers: [AdminGuard, AuthService]
    });

    guard = TestBed.inject(AdminGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access for admin users', () => {
    spyOn(authService, 'getUserRole').and.returnValue('admin');
    expect(guard.canActivate()).toBe(true);
  });

  it('should redirect to home page for non-admin users', () => {
    spyOn(authService, 'getUserRole').and.returnValue('user');
    const navigateSpy = spyOn(router, 'navigate');

    expect(guard.canActivate()).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/acceuil']);
  });

  it('should redirect to home page for non-admin users', () => {
    spyOn(authService, 'getUserRole').and.returnValue('user');
    const navigateSpy = spyOn(router, 'navigate');

    guard.canActivate();

    expect(navigateSpy).toHaveBeenCalledWith(['/acceuil']);
  });
});
