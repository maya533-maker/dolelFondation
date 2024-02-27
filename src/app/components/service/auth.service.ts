import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private authTokenKey = 'authToken';

  constructor(private http: HttpClient, private router: Router) {}

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  private userRole: string = '';

  setUserRole(role: string): void {
    this.userRole = role;
  }

  getUserRole(): string {
    return this.userRole;
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  private setAuthToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }


  modifierProfil(profileData: any): Observable<any> {
    const apiUrl = `${this.apiUrl}/modifierProfil`;
    return this.http.post(apiUrl, profileData).pipe(
      map((response: any) => response),
      catchError(this.handleError)
    );
  }


  signIn(email: string, password: string): Observable<any> {
    const loginData = { email: email, password: password };
    return this.http.post(`${this.apiUrl}/login`, loginData).pipe(
      map((response: any) => {
        // Stocker le token dans le localStorage
        this.setAuthToken(response.token);
        // Stocker le rôle de l'utilisateur
        this.setUserRole(response.role);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  signUpDonateur(signUpData: any): Observable<any> {
    // console.log('Donateur SignUp Data:', { name, email, password, image, firstName, telephone });

    return this.http.post(`${this.apiUrl}/register`, signUpData);
  }

  // signUpDonateur(name: string, email: string, password: string, image: string, firstName: string, telephone: string): Observable<any> {
  //   console.log('Donateur SignUp Data:', { name, email, password, image, firstName, telephone });
  //   const signUpData = { name, email, password, role: 'donateur', image, firstName, telephone };
  //   return this.http.post(`${this.apiUrl}/register`, signUpData).pipe(
  //     map((response: any) => response),
  //     catchError(this.handleError)
  //   );
  // }

  signUpFondation(signUpData: any): Observable<any> {
    // console.log('Fondation SignUp Data:', { name, email, password, image, numeroEnregistrement, adresse, description, telephone });

    return this.http.post(`${this.apiUrl}/register`, signUpData);
  }

  // Bloquer un donateur par l'administrateur
  blockDonor(donorId: number): Observable<any> {
    return this.http
      .patch(`${this.apiUrl}/admin/block-donor/${donorId}`, {})
      .pipe(
        map((response: any) => response),
        catchError(this.handleError)
      );
  }

  // Débloquer un donateur par l'administrateur
  unblockDonor(donorId: number): Observable<any> {
    return this.http
      .patch(`${this.apiUrl}/admin/unblock-donor/${donorId}`, {})
      .pipe(
        map((response: any) => response),
        catchError(this.handleError)
      );
  }

  // Bloquer une fondation par l'administrateur
  blockFoundation(foundationId: number): Observable<any> {
    return this.http
      .patch(`${this.apiUrl}/admin/block-foundation/${foundationId}`, {})
      .pipe(
        map((response: any) => response),
        catchError(this.handleError)
      );
  }

  // Débloquer une fondation par l'administrateur
  unblockFoundation(foundationId: number): Observable<any> {
    return this.http
      .patch(`${this.apiUrl}/admin/unblock-foundation/${foundationId}`, {})
      .pipe(
        map((response: any) => response),
        catchError(this.handleError)
      );
  }

  // Supprimer un utilisateur (donateur ou fondation) par l'administrateur
  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/admin/delete-user/${userId}`).pipe(
      map((response: any) => response),
      catchError(this.handleError)
    );
  }

  handleSignInSuccess(role: string) {
    let alertTitle = '';
    let alertText = '';

    switch (role) {
      case 'admin':
        alertTitle = 'Bienvenue Admin';
        alertText = 'Vous êtes connecté en tant qu\'administrateur.';
        break;
      case 'fondation':
        alertTitle = 'Bienvenue Fondation';
        alertText = 'Vous êtes connecté en tant que fondation.';
        break;
      case 'donateur':
        alertTitle = 'Bienvenue Donateur';
        alertText = 'Vous êtes connecté en tant que donateur.';
        break;
      default:
        alertTitle = 'Bienvenue';
        alertText = 'Vous êtes connecté avec un rôle non défini.';
        break;
    }

    this.alertMessage('success', alertTitle, alertText);

    switch (role) {
      case 'admin':
        this.router.navigate(['/pageAd']);
        break;
      case 'fondation':
        this.router.navigate(['/dash']);
        break;
      case 'donateur':
        this.router.navigate(['/page']);
        break;
      default:
        this.router.navigate(['/default']);
        break;
    }
  }

  private alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      timer: 1500
    });
  }
}
