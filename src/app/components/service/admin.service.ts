import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getListeCompteAReactiver(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/listeCompteAReactiver`);
  }

  reactiverCompte(userId: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/reactiverCompte/${userId}`, {});
  }
}
