import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fondations-list',
  template: `
    <app-dash-ad></app-dash-ad>
    <div class="card-container">
      <span style="color: black;font-weight:bold;">Liste des Fondations</span>
      <div
        *ngFor="let fondation of getFondationsPage()"
        class="card"
        [ngClass]="{ blocked: fondation.bloquee }"
      >
        <div class="card-content">
          <div>
            <img
              src="{{ apiUrl }}/{{ fondation?.image }}"
              class="card-img-top"
              alt="..."
              style="max-height: 200px;objectif-fit:contain;"
            />
            <div class="icons" *ngIf="isAdmin || isDonateur">
              <!-- Ajoutez cette condition pour afficher uniquement pour le donateur -->
              <button
                *ngIf="isDonateur && !fondation.abonne"
                class="btn btn-primary btn-abonner"
                (click)="sAbonner(fondation)"
              >
                S'abonner
              </button>
              <button
                *ngIf="isDonateur && fondation.abonne"
                class="btn btn-danger btn-se-desabonner"
                (click)="seDesabonner(fondation)"
              >
                Se désabonner
              </button>

              <!-- Ajoutez le reste des icônes ici (pour les admins) -->
              <i
                class="fas fa-check text-success"
                (click)="approuverDemande(fondation)"
              ></i>
              <i
                class="fas fa-times text-danger"
                (click)="refuserDemande(fondation)"
              ></i>
              <i
                class="fas fa-trash text-warning"
                (click)="supprimerFondation(fondation)"
              ></i>
              <button
                *ngIf="!fondation.bloquee"
                class="btn btn-danger"
                (click)="bloquerFondation(fondation)"
              >
                <i class="fas fa-ban"></i> Bloquer
              </button>
              <button
                *ngIf="fondation.bloquee"
                class="btn btn-success"
                (click)="debloquerFondation(fondation)"
              >
                <i class="fas fa-unlock"></i> Débloquer
              </button>
            </div>
          </div>
          <div class="details">
            <h5 class="card-title">{{ fondation.nom }}</h5>
            <p class="card-text">{{ fondation.description }}</p>
            <button
              class="btn btn-primary btn-details"
              (click)="detailsFondation(fondation)"
            >
              Détails
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Pagination -->
<div class="d-flex flex-wrap justify-content-center my-5">
  <button
    class="btn btn-mauve me-2"
    [disabled]="pageActuelle === 1"
    (click)="precedentPage()"
  >
    Précédent
  </button>
  <button
    class="btn"
    [class.btn-mauve]="page === pageActuelle"
    [class.btn-jaune]="page !== pageActuelle"
    *ngFor="let page of pages"
    (click)="pageActuelle = page"
  >
    {{ page }}
  </button>
  <button
    class="btn btn-mauve ms-2"
    [disabled]="pageActuelle === totalPages"
    (click)="suivantPage()"
  >
    Suivant
  </button>
</div>

  `,
  styles: [
    `
      .card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 7%;
        gap: 35px;
        flex-wrap: wrap;
      }

      .card {
        width: 300px;
        border: 1px solid #ccc;
        border-radius: 10px;
        overflow: hidden;
        margin-bottom: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
      }

      .card:hover {
        transform: translateY(-5px);
      }

      .card-content {
        display: flex;
        flex-direction: column;
      }

      .image {
        height: 150px;
        background-size: cover;
        background-position: center;
        border-bottom: 1px solid #ccc;
      }

      .details {
        padding: 10px;
      }

      .card-title {
        font-size: 20px;
        margin-bottom: 10px;
        color: #3b0458;
      }

      .card-text {
        color: #333;
        margin-bottom: 15px;
      }

      .icons {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background-color: #fff;
      }

      .btn {
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .btn-primary,
      .btn-danger,
      .btn-details {
        border: none;
        padding: 8px 15px;
        border-radius: 5px;
      }

      .btn-primary {
        background-color: #3b0458;
        color: #fff;
      }

      .btn-primary:hover {
        background-color: #2c033f;
      }
      .btn-mauve {
        background-color: #2c033f;
        color: #fff;
        border: none;
        padding: 8px 15px;
        border-radius: 5px;
      }
      .btn.btn-jaune {
  background-color: #f7e801;
  color: #3b0458;
}

.btn.btn-jaune:hover {
  background-color: #e7d301;
}

      .btn-mauve:hover {
        background-color: #f7e801;
      }
      .btn-danger {
        background-color: #d9534f;
        color: #fff;
      }

      .btn-danger:hover {
        background-color: #c9302c;
      }


      .blocked {
        filter: blur(2px);
      }
    `,
  ],
})
export class FondationsListComponent implements OnInit {
  fondations: any[] = [];
  isAdmin: boolean = false;
  isDonateur: boolean = false;
  articlesParPage = 6; // Nombre d'articles par page
  pageActuelle = 1; // Page actuelle
  apiUrl = 'http://127.0.0.1:8000/api';

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
    this.getListeFondations().subscribe((response: any) => {
      this.fondations = response.data;
    });

    if (this.isDonateur || this.isAdmin) {
      console.log('Fetching Fondations...');
      this.getListeFondations().subscribe((response: any) => {
        this.fondations = response.data;
        console.log('Fondations actualisées :', this.fondations);
      });
    }
  }

  getListeFondations(): Observable<any> {
    const apiUrl = 'http://127.0.0.1:8000/api/listeFondation';
    return this.http.get(apiUrl);
  }

  // Méthode pour aller à la page précédente
  precedentPage(): void {
    if (this.pageActuelle > 1) {
      this.pageActuelle--;
    }
  }

  // Méthode pour aller à la page suivante
  suivantPage(): void {
    if (this.pageActuelle < this.totalPages) {
      this.pageActuelle++;
    }
  }

  // Méthode pour obtenir les fondations de la page actuelle
  getFondationsPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.articlesParPage;
    const indexFin = indexDebut + this.articlesParPage;
    return this.fondations.slice(indexDebut, indexFin);
  }

  // Méthode pour générer la liste des pages
  get pages(): number[] {
    const totalPages = Math.ceil(this.fondations.length / this.articlesParPage);
    return Array(totalPages)
      .fill(0)
      .map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.fondations.length / this.articlesParPage);
  }

  detailsFondation(fondation: any): void {
    // Redirigez le donateur vers la liste des collectes
    this.router.navigate(['/liste-collectes']);
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

  abonnerFondation(fondationId: number): Observable<any> {
    const apiUrl = `http://127.0.0.1:8000/api/abonner/${fondationId}`;
    return this.http.post(apiUrl, {});
  }

  desabonnerFondation(fondationId: number): Observable<any> {
    const apiUrl = `http://127.0.0.1:8000/api/desabonner/${fondationId}`;
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
