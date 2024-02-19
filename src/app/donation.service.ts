
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  private tokenKey = 'donationToken';

  constructor(private http: HttpClient) {}

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private redirectUrl(redirectUrl: string): void {
    window.location.href = redirectUrl;
  }

  faireUnDon(donationData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken() // Utilisation du token stocké
    });

    return this.http
      .post<any>(`${this.apiUrl}/faireUnDon`, donationData, { headers })
      .pipe(
        map((response: any) => {
          // Stocker le token dans le localStorage
          this.setToken(response.token);
          return response;
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error.error);
        })
      );
  }

   // Méthode pour récupérer la liste des collectes
   getListeCollecte(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/listeCollecte`).pipe(
      catchError((error: any) => {
        console.error("Erreur lors de la récupération des collectes :", error);
        return throwError("Une erreur s'est produite lors de la récupération des collectes. Veuillez réessayer plus tard.");
      })
    );
  }

  initierPaiement(donationData: any): Observable<string> {
    return this.http.post<any>(`${this.apiUrl}/faireUnDon`, donationData).pipe(
      map((response: any) => {
        this.redirectUrl(response.redirect_url); // Redirection vers l'URL de paiement
        return response.redirect_url;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error.error.error);
      })
    );
  }

}
