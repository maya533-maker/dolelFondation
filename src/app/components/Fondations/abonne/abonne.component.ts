// abonne.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-abonne',
  templateUrl: './abonne.component.html',
  styleUrls: ['./abonne.component.css']
})
export class AbonneComponent implements OnInit {
  fondationsAbonnees: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadAbonnes();
  }

  loadAbonnes(): void {
    const apiUrl = 'http://127.0.0.1:8000/api/listeAbonner';
    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.fondationsAbonnees = response.data;
        console.log('Abonnés chargés :', this.fondationsAbonnees);
      },
      (error: any) => {
        console.error('Erreur lors du chargement des abonnés :', error);
      }
    );
  }
}
