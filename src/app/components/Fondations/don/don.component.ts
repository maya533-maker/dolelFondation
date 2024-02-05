import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-don',
  template: `
    <app-dashboard></app-dashboard>
    <div style="width: 536px; margin-top: 8%; margin-left: 35%; height: 49px; position: relative">
      <div style="width: 248px; height: 49px; left: 0px; top: 0px; position: absolute; text-align: center; color: #F7E801; font-size: 40px; font-family: Inter; font-weight: 700; word-wrap: break-word">
        CAGNOTTE:
      </div>
      <div style="width: 289px; height: 49px; left: 247px; top: 0px; position: absolute; text-align: center; color: #F7E801; font-size: 40px; font-family: Inter; font-weight: 700; word-wrap: break-word">
        {{ collecte.objectifFinancier | currency: 'XOF' }}
      </div>
    </div>
    <div class="card" style="margin-top: 3%; border: 2px solid red; margin-left: 8%; border: 1px solid #F7E801; width: 90%">
      <div class="card-body">
        <h2>{{ collecte.titre }}</h2>
        <p>Date de clôture: {{ collecte.dateCloture }}</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col" style="background-color: #F7E801; font-weight: bold;">Photo</th>
              <th scope="col" style="background-color: #F7E801; font-weight: bold;">Nom donateur</th>
              <th scope="col" style="background-color: #F7E801; font-weight: bold;">Montant</th>
              <th scope="col" style="background-color: #F7E801; font-weight: bold;">Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let donateur of donateurs">
              <th scope="row"><img style="width: 49.98px; height: 50px; border-radius: 9999px" [src]="donateur.photo" /></th>
              <td>{{ donateur.nom }}</td>
              <td>{{ donateur.montant | currency: 'XOF' }}</td>
              <td>{{ donateur.statut }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [
    `
      /* Ajoutez vos styles CSS ici */
      th {
        text-align: center;
      }
    `,
  ],
})
export class DonComponent {
  collecte: any = {};
  donateurs: any[] = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const collecteId = params['collecteId'];
      this.chargeDetailsCollecte(collecteId);
      this.chargeListeDonateurs(collecteId);
    });
  }

  chargeDetailsCollecte(collecteId: string): void {
    // Utilisez l'ID de la collecte pour appeler votre API et récupérer les détails de la collecte
    // Endpoint pour récupérer les détails de la collecte
    const apiUrl = `http://127.0.0.1:8000/api/detailsCollecte/${collecteId}`;

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.collecte = response.data;
      },
      (error) => {
        console.error('Erreur lors du chargement des détails de la collecte :', error);
      }
    );
  }

  chargeListeDonateurs(collecteId: string): void {
    // Utilisez l'ID de la collecte pour appeler votre API et récupérer la liste des donateurs
    // Endpoint pour récupérer la liste des donateurs pour une collecte spécifique
    const apiUrl = `http://127.0.0.1:8000/api/listeDonateurAUnDon/${collecteId}`;

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.donateurs = response.data;
      },
      (error) => {
        console.error('Erreur lors du chargement de la liste des donateurs :', error);
      }
    );
  }
}
