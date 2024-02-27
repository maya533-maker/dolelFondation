import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { FoundationGuard } from './foundation.guard';
import { AuthService } from '../components/service/auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('FoundationGuard', () => {
  let guard: FoundationGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientModule],
      providers: [FoundationGuard, AuthService]
    });

    guard = TestBed.inject(FoundationGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access for foundation users', () => {
    spyOn(authService, 'getUserRole').and.returnValue('fondation');
    expect(guard.canActivate()).toBe(true);
  });

  it('should redirect to home page for non-foundation users', () => {
    spyOn(authService, 'getUserRole').and.returnValue('admin');
    const navigateSpy = spyOn(router, 'navigate');

    expect(guard.canActivate()).toBe(false);
    expect(navigateSpy).toHaveBeenCalledWith(['/acceuil']);
  });
});
