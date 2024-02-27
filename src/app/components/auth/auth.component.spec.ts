import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthService } from '../service/auth.service';
import { of } from 'rxjs';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [HttpClientModule, RouterModule.forRoot([])],
      providers: [AuthService, HttpClient],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return true if the email is valid', () => {
    const validEmail = 'test@example.com';
    const isValid = component.isValidEmail(validEmail);
    expect(isValid).toBeTruthy();
  });

  it('should return false if the email is invalid', () => {
    const invalidEmail = 'invalid-email';
    const isValid = component.isValidEmail(invalidEmail);
    expect(isValid).toBeFalsy();
  });

  it('should sign in user with valid credentials', () => {
    spyOn(authService, 'signIn').and.returnValue(of({ role: 'user', token: 'mockToken' }));
    component.emailLogin = 'test@example.com';
    component.passwordLogin = 'password123';
    component.signIn();
    expect(authService.handleSignInSuccess).toHaveBeenCalledWith('user');
  });

  it('should sign up donor successfully', () => {
    spyOn(authService, 'signUpDonateur').and.returnValue(of({ data: { role: 'donateur' } }));
    component.selectedRole = 'donateur';
    // Set other required data...
    component.signUp();
    expect(authService.handleSignInSuccess).toHaveBeenCalledWith('donateur');
  });
});
