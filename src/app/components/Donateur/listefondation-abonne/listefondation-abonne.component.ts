// listefondation-abonne.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listefondation-abonne',
  templateUrl: './listefondation-abonne.component.html',
  styleUrls: ['./listefondation-abonne.component.css']
})
export class ListefondationAbonneComponent implements OnInit {
  fondationsAbonnees: any[] = [];
  listeCollectes: any[] = [];
  selectedFondationId: number | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getListeFondationsAbonnees();
  }

  getListeFondationsAbonnees(): void {
    this.http.get<any>('http://127.0.0.1:8000/api/listeFondationAbonner').subscribe(
      (response) => {
        this.fondationsAbonnees = response.data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des fondations abonnées :', error);
      }
    );
  }

  faireUnDon(collecte: any): void {
    this.selectedFondationId = collecte.id;
    this.getCollectesByFondationId(collecte.id);
    console.log('Faire un don pour la collecte :', collecte);
  }

  getCollectesByFondationId(fondationId: number): void {
    this.http.get<any>(`http://127.0.0.1:8000/api/listeCollecte`).subscribe(
      (response) => {
        this.listeCollectes = response.data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des collectes :', error);
      }
    );
  }



  showCollectesModal(fondationId: number): void {
    this.selectedFondationId = fondationId;
    this.getCollectesByFondationId(fondationId);
  }

  alertMessage(): void {
    console.log('Message d\'alerte');
  }
}
