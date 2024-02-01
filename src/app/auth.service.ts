// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient, private router: Router) { }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  signIn(email: string, password: string): Observable<any> {
    const loginData = { email: email, password: password };
    return this.http.post(`${this.apiUrl}/login`, loginData).pipe(
      map((response: any) => response),
      catchError(this.handleError)
    );
  }


  signUpDonateur(signUpData:any): Observable<any> {
    // console.log('Donateur SignUp Data:', { name, email, password, image, firstName, telephone });

    return this.http.post(`${this.apiUrl}/register`, signUpData)
   
  }


  // signUpDonateur(name: string, email: string, password: string, image: string, firstName: string, telephone: string): Observable<any> {
  //   console.log('Donateur SignUp Data:', { name, email, password, image, firstName, telephone });
  //   const signUpData = { name, email, password, role: 'donateur', image, firstName, telephone };
  //   return this.http.post(`${this.apiUrl}/register`, signUpData).pipe(
  //     map((response: any) => response),
  //     catchError(this.handleError)
  //   );
  // }

  signUpFondation(name: string, email: string, password: string, image: string, numeroEnregistrement: string, adresse: string, description: string, telephone: string): Observable<any> {
    console.log('Fondation SignUp Data:', { name, email, password, image, numeroEnregistrement, adresse, description, telephone });
    const signUpData = { name, email, password, role: 'fondation', image, numeroEnregistrement, adresse, description, telephone };
    return this.http.post(`${this.apiUrl}/register`, signUpData).pipe(
      map((response: any) => response),
      catchError(this.handleError)
    );
  }

  handleSignInSuccess(role: string) {
    switch (role) {
      case 'admin':
        this.router.navigate(['/dashboard']);
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
}
