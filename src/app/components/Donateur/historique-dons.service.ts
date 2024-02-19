// historique-dons.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoriqueDonsService {
  private baseUrl = 'http://127.0.0.1:8000/api'; // L'URL de base de votre API

  constructor(private http: HttpClient) { }

  getHistoriqueDons(): Observable<any[]> {
    const url = `${this.baseUrl}/historiqueDons`;
    return this.http.get<any[]>(url);
  }

  getHistoriqueDon(donId: number): Observable<any> {
    const url = `${this.baseUrl}/historiqueDon/${donId}`;
    return this.http.get<any>(url);
  }
}
