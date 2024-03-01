import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getListeComptesSupprimes(): Observable<any[]> {
    const url = `${this.baseUrl}/listeCompteAReactiver`;
    return this.http.get<any[]>(url);
  }

  reactiverCompte(userId: number): Observable<any> {
    const url = `${this.baseUrl}/reactiverCompte/${userId}`;
    return this.http.put(url, {});
  }
}
