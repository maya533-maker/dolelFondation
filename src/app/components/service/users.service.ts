import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  acceptFoundation(userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/approuver/${userId}`, {});
  }

  rejectFoundation(userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/refuserDemande/${userId}`, {});
  }
}
