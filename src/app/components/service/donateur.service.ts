// donateur.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DonateurService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getDonateurs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listeDonateur`);
  }


// donateur.service.ts
deleteUtilisateur(utilisateurId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/supprimer/${utilisateurId}`);
}

// donateur.service.ts
bloquerUtilisateur(utilisateurId: number): Observable<void> {
  return this.http.post<void>(`${this.apiUrl}/bloquer/${utilisateurId}`, {});
}

debloquerUtilisateur(utilisateurId: number): Observable<void> {
  return this.http.post<void>(`${this.apiUrl}/debloquer/${utilisateurId}`, {});
}

}
