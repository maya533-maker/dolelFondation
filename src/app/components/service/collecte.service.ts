import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Collecte } from 'src/app/collecte.model';

@Injectable({
  providedIn: 'root',
})
export class CollecteService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getCollectes(): Observable<Collecte[]> {
    return this.http.get<Collecte[]>(`${this.apiUrl}/listeCollecteEnCours`,);
  }

  // Exemple dans le service CollecteService
getCollectesParFondation(fondationId: string): Observable<Collecte[]> {
  return this.http.get<Collecte[]>(`${this.apiUrl}/listeCollecte/${fondationId}`);
}



addCollecte(collecte: any): Observable<Collecte> {
  return this.http.post<Collecte>(`${this.apiUrl}/creerCollecte`, collecte)
    .pipe(
      catchError((error) => {
        console.error('Erreur lors de l\'ajout de la collecte :', error);
        throw error; // assurez-vous de gérer l'erreur ici
      })
    );
}


getCollectesCloturees(): Observable<Collecte[]> {
  return this.http.get<Collecte[]>(`${this.apiUrl}/listeCollecteCloturer`);
}

modifierCollecte(id: number): Observable<any> {
  const url = `http://127.0.0.1:8000/api/modifierCollecte/${id}`;
  return this.http.post(url, {}).pipe(
    catchError((error: HttpErrorResponse) => {
      return throwError(error);
    })
  );
}




cloturerCollecte(collecteId: number): Observable<void> {
  return this.http.put<void>(`${this.apiUrl}/cloturerUneCollecte/${collecteId}`, {});
}

decloturerCollecte(collecteId: number): Observable<void> {
  return this.http.put<void>(`${this.apiUrl}/decloturerUneCollecte/${collecteId}`, {});
}



  getCollectesByStatut(statut: string): Observable<Collecte[]> {
    return this.http.get<Collecte[]>(`${this.apiUrl}/collectes/${statut}`);
  }



  deleteCollecte(collecteId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/supprimerCollecte/${collecteId}`);
  }


}
