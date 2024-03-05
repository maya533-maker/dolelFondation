import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fondation-list',
  template: `
   <app-dashboard></app-dashboard>
    <div class="container" style="margin-top: 5%;">
      <div class="view-mode">
        <button class="btn btn-secondary" (click)="switchToListView()">
          Vue Liste
        </button>
        <button class="btn btn-secondary" (click)="switchToGridView()">
          Vue Grille
        </button>
      </div>
      <span style="color:black;font-weight:bold;font-size:30px;">LISTE FONDATIONS</span>
      <div class="card-container" [ngClass]="{ 'list-view': isListView, 'grid-view': isGridView }">
        <div *ngIf="isListView" class="list-view">
          <table class="table w-100">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nom</th>
                <th scope="col">Description</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let fondation of getFondationsPage()">
                <th scope="row">{{ fondation.id }}</th>
                <td>{{ fondation.nom }}</td>
                <td>{{ fondation.description }}</td>
                <td>
                  <button class="btn btn-primary btn-details" (click)="detailsFondation(fondation)">
                    Détails
                  </button>
                  <button class="btn btn-danger" *ngIf="isAdmin" (click)="supprimerFondation(fondation)">
                    Supprimer
                  </button>
                  <button class="btn btn-success" *ngIf="isAdmin && fondation.bloquee" (click)="debloquerFondation(fondation)">
                    Débloquer
                  </button>
                  <button class="btn btn-warning" *ngIf="isAdmin && !fondation.bloquee" (click)="bloquerFondation(fondation)">
                    Bloquer
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div *ngIf="isGridView" class="grid-view">
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            <div *ngFor="let fondation of getFondationsPage()" class="col mb-4">
              <div class="card" [ngClass]="{ blocked: fondation.bloquee }">
                <div class="card-content">
                  <div class="image" [style.background-image]="'url(' + fondation.image + ')'" *ngIf="isDonateur">
                    <img class="card-img-top img-fluid" style="max-height: 300px;object-fit: contain;" src="{{ apiUrl }}/{{ fondation?.image }}" alt="" />
                    <div class="icons" *ngIf="isAdmin">
                      <i class="fas fa-check text-success" (click)="approuverDemande(fondation)"></i>
                      <i class="fas fa-times text-danger" (click)="refuserDemande(fondation)"></i>
                      <i class="fas fa-trash text-warning" (click)="supprimerFondation(fondation)"></i>
                      <button *ngIf="!fondation.bloquee" class="btn btn-danger" (click)="bloquerFondation(fondation)">
                        <i class="fas fa-ban"></i> Bloquer
                      </button>
                      <button *ngIf="fondation.bloquee" class="btn btn-success" (click)="debloquerFondation(fondation)">
                        <i class="fas fa-unlock"></i> Débloquer
                      </button>
                    </div>
                  </div>
                  <div class="details">
                    <div class="abonne-badge">
                      <button *ngIf="!fondation.bloquee && fondation.abonne" class="btn btn-danger btn-se-desabonner" (click)="seDesabonner(fondation)">
                        Se désabonner
                      </button>
                      <button *ngIf="!fondation.bloquee && !fondation.abonne" class="btn btn-primary btn-abonner" (click)="sAbonner(fondation)">
                        S'abonner
                      </button>
                    </div>
                    <h5 class="card-title">{{ fondation.nom }}</h5>
                    <p class="card-text">{{ fondation.description }}</p>
                    <button class="btn btn-primary btn-details" (click)="detailsFondation(fondation)">
                      Détails
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pagination -->
    <div class="d-flex flex-wrap justify-content-center my-5">
      <button class="btn btn-mauve me-2" [disabled]="pageActuelle === 1" (click)="precedentPage()">
        Précédent
      </button>
      <button class="btn btn-mauve ms-2" *ngFor="let page of pages" (click)="pageActuelle = page" [style.backgroundColor]="page === pageActuelle ? '#f7e801' : '#3b0458'">
        {{ page }}
      </button>
      <button class="btn btn-mauve ms-2" [disabled]="pageActuelle === totalPages" (click)="suivantPage()">
        Suivant
      </button>
    </div>
  `,
  styles: [
    `
      .card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 7%;
}

.card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-content {
  padding: 20px;
}

.image {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 200px; /* Ajustez la hauteur selon vos besoins */
  overflow: hidden; /* Assurez-vous que l'image ne dépasse pas de la carte */
}

.image img {
  max-width: 100%;
  max-height: 100%;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.card-text {
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
}

.btn-details {
  background-color: #f7e801;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 14px;
}

.btn-details:hover {
  background-color: #d0bb00;
}

.icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-top: 1px solid #ccc;
}

.icons button {
  border: none;
  background: none;
  cursor: pointer;
}

.icons button:hover {
  color: #f00;
}

.list-view .card {
  border-color: #ccc;
  background-color: #fff;
}

.grid-view .card {
  border-color: #ccc;
  background-color: #fff;
}


      .btn-abonner,
      .btn-se-desabonner,
      .btn-details {
        width: 100%;
        padding: 8px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
      }

      .btn-abonner {
        background-color: #3b0458;
        color: #fff;
      }

      .btn-se-desabonner {
        background-color: #dc3545;
        color: #fff;
      }

      .btn-details {
        background-color: #f7e801;
        color: #fff;
      }

      .btn-abonner:hover,
      .btn-se-desabonner:hover,
      .btn-details:hover {
        opacity: 0.8;
      }

      .abonne-badge {
        position: absolute;
        top: 10px;
        left: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }

      .btn-abonner,
      .btn-se-desabonner {
        width: fit-content;
        padding: 8px 16px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        font-size: 14px;
        margin-bottom: 5px;
      }

      .btn-abonner {
        background-color: #3b0458;
        color: #fff;
      }

      .btn-se-desabonner {
        background-color: #dc3545;
        color: #fff;
      }
 
    `,
  ],
})
export class FondationListComponent implements OnInit {
  fondations: any[] = [];
  isAdmin: boolean = false;
  isDonateur: boolean = false;
  pageActuelle = 1;
  articlesParPage = 6;

  apiUrl = 'http://127.0.0.1:8000/api';
  isListView: boolean = false;
  isGridView: boolean = true;

  switchToListView(): void {
    this.isListView = true;
    this.isGridView = false;
  }

  switchToGridView(): void {
    this.isListView = false;
    this.isGridView = true;
  }

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.authService.getUserRole() === 'admin';
    this.isDonateur = this.authService.getUserRole() === 'donateur';
    console.log('isAdmin:', this.isAdmin);
    console.log('isDonateur:', this.isDonateur);
    if (this.isDonateur || this.isAdmin) {
      this.getListeFondations().subscribe((response: any) => {
        this.fondations = response.data;
        console.log('Fondations actualisées :', this.fondations);
      });
    }
  }

  getListeFondations(): Observable<any> {
    let apiUrl: string;

    if (this.isDonateur) {
      apiUrl = 'http://127.0.0.1:8000/api/listeFondations'; // URL pour le donateur
    } else if (this.isAdmin) {
      apiUrl = 'http://127.0.0.1:8000/api/listeFondation'; // URL pour l'administrateur
    } else {
      console.error('Rôle utilisateur non reconnu.');
      return throwError('Rôle utilisateur non reconnu.');
    }

    return this.http.get(apiUrl);
  }

  detailsFondation(fondation: any): void {
    if (this.isDonateur) {
      this.router.navigate(['/liste-collectes']);
    } else {
      console.log('Autre logique de redirection pour les autres rôles.');
    }
  }

  sAbonner(fondation: any): void {
    const fondationId = fondation.id;
    if (fondationId === undefined) {
      console.error('ID de la fondation indéfini.');
      return;
    }

    this.abonnerFondation(fondationId).subscribe(
      () => {
        fondation.abonne = true;
        this.alertMessage(
          'success',
          'Abonnement réussi!',
          'Vous êtes abonné avec succès à la fondation.'
        );
      },
      (error) => {
        console.error("Erreur lors de l'abonnement à la fondation:", error);
        this.alertMessage(
          'error',
          "Erreur d'abonnement!",
          "Une erreur s'est produite lors de l'abonnement à la fondation."
        );
      }
    );
  }

  seDesabonner(fondation: any): void {
    const fondationId = fondation.id;
    if (fondationId === undefined) {
      console.error('ID de la fondation indéfini.');
      return;
    }

    this.desabonnerFondation(fondationId).subscribe(
      () => {
        fondation.abonne = false;
        this.alertMessage(
          'success',
          'Désabonnement réussi!',
          'Vous vous êtes désabonné avec succès de la fondation.'
        );
      },
      (error) => {
        console.error('Erreur lors du désabonnement de la fondation:', error);
        this.alertMessage(
          'error',
          'Erreur de désabonnement!',
          "Une erreur s'est produite lors du désabonnement de la fondation."
        );
      }
    );
  }
  precedentPage(): void {
    if (this.pageActuelle > 1) {
      this.pageActuelle--;
    }
  }

  suivantPage(): void {
    if (this.pageActuelle < this.totalPages) {
      this.pageActuelle++;
    }
  }
  get pages(): number[] {
    const totalPages = Math.ceil(this.fondations.length / this.articlesParPage);
    return Array(totalPages)
      .fill(0)
      .map((_, index) => index + 1);
  }

  get totalPages(): number {
    return Math.ceil(this.fondations.length / this.articlesParPage);
  }

  getFondationsPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
    const indexFin = indexDebut + this.articlesParPage;
    return this.fondations.slice(indexDebut, indexFin);
  }

  abonnerFondation(fondationId: number): Observable<any> {
    const apiUrl = `http://127.0.0.1:8000/api/sabonner/${fondationId}`;
    return this.http.post(apiUrl, {});
  }

  desabonnerFondation(fondationId: number): Observable<any> {
    const apiUrl = `http://127.0.0.1:8000/api/sedesabonner/${fondationId}`;
    return this.http.post(apiUrl, {});
  }

  supprimerFondation(fondation: any): void {
    const fondationId = fondation.id;
    if (fondationId === undefined) {
      console.error('ID de la fondation indéfini.');
      return;
    }

    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer cette fondation?',
      text: 'Cette action est irréversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteFondation(fondationId).subscribe(
          () => {
            this.alertMessage(
              'success',
              'Suppression réussie!',
              'La fondation a été supprimée avec succès.'
            );
            this.getListeFondations().subscribe((response: any) => {
              this.fondations = response.data;
            });
          },
          (error) => {
            console.error(
              'Erreur lors de la suppression de la fondation :',
              error
            );
            this.alertMessage(
              'error',
              'Erreur de suppression!',
              "Une erreur s'est produite lors de la suppression de la fondation."
            );
          }
        );
      }
    });
  }

  approuverDemande(fondation: any): void {
    const fondationId = fondation.id;
    if (fondationId === undefined) {
      console.error('ID de la fondation indéfini.');
      return;
    }

    this.approuverDemandeFondation(fondationId).subscribe(
      () => {
        this.alertMessage(
          'success',
          'Approbation réussie!',
          'La fondation a été approuvée avec succès.'
        );
        this.getListeFondations().subscribe((response: any) => {
          this.fondations = response.data;
        });
      },
      (error) => {
        console.error("Erreur lors de l'approbation de la fondation :", error);
        this.alertMessage(
          'error',
          "Erreur d'approbation!",
          "Une erreur s'est produite lors de l'approbation de la fondation."
        );
      }
    );
  }

  refuserDemande(fondation: any): void {
    const fondationId = fondation.id;
    if (fondationId === undefined) {
      console.error('ID de la fondation indéfini.');
      return;
    }

    this.refuserDemandeFondation(fondationId).subscribe(
      () => {
        this.alertMessage(
          'success',
          'Refus réussi!',
          'La fondation a été refusée avec succès.'
        );
        this.getListeFondations().subscribe((response: any) => {
          this.fondations = response.data;
        });
      },
      (error) => {
        console.error('Erreur lors du refus de la fondation :', error);
        this.alertMessage(
          'error',
          'Erreur de refus!',
          "Une erreur s'est produite lors du refus de la fondation."
        );
      }
    );
  }

  approuverDemandeFondation(fondationId: number): Observable<any> {
    const apiUrl = `http://127.0.0.1:8000/api/approuver/${fondationId}`;
    return this.http.post(apiUrl, {});
  }

  refuserDemandeFondation(fondationId: number): Observable<any> {
    const apiUrl = `http://127.0.0.1:8000/api/refuserDemande/${fondationId}`;
    return this.http.post(apiUrl, {});
  }

  deleteFondation(fondationId: number): Observable<void> {
    const apiUrl = `http://127.0.0.1:8000/api/supprimer/${fondationId}`;
    return this.http.delete<void>(apiUrl);
  }

  bloquerFondation(fondation: any): void {
    const fondationId = fondation.id;
    if (fondationId === undefined) {
      console.error('ID de la fondation indéfini.');
      return;
    }

    this.bloquerFondationService(fondationId).subscribe(
      () => {
        fondation.bloquee = true;
        this.alertMessage(
          'success',
          'Blocage réussi!',
          'La fondation a été bloquée avec succès.'
        );
      },
      (error) => {
        console.error('Erreur lors du blocage de la fondation :', error);
        this.alertMessage(
          'error',
          'Erreur de blocage!',
          "Une erreur s'est produite lors du blocage de la fondation."
        );
      }
    );
  }

  debloquerFondation(fondation: any): void {
    const fondationId = fondation.id;
    if (fondationId === undefined) {
      console.error('ID de la fondation indéfini.');
      return;
    }

    this.debloquerFondationService(fondationId).subscribe(
      () => {
        fondation.bloquee = false;
        this.alertMessage(
          'success',
          'Déblocage réussi!',
          'La fondation a été débloquée avec succès.'
        );
      },
      (error) => {
        console.error('Erreur lors du déblocage de la fondation :', error);
        this.alertMessage(
          'error',
          'Erreur de déblocage!',
          "Une erreur s'est produite lors du déblocage de la fondation."
        );
      }
    );
  }

  bloquerFondationService(fondationId: number): Observable<any> {
    const apiUrl = `http://127.0.0.1:8000/api/bloquer/${fondationId}`;
    return this.http.post(apiUrl, {});
  }

  debloquerFondationService(fondationId: number): Observable<any> {
    const apiUrl = `http://127.0.0.1:8000/api/debloquer/${fondationId}`;
    return this.http.post(apiUrl, {});
  }

  alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      timer: 1500,
    });
  }
}
