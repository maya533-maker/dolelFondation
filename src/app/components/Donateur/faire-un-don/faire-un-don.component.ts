import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faire-un-don',
  template: `
    <app-dashboard></app-dashboard>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header text-center">
              <h4 class="mb-0">Faire un don avec PayTech</h4>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ selectedCollecte?.titre }}</h5>
              <p class="card-text">{{ selectedCollecte?.description }}</p>

              <form (ngSubmit)="initierPaiement()">
                <div class="mb-3">
                  <label for="montant" class="form-label">Montant du don (FCFA)</label>
                  <div class="input-group">
                    <span class="input-group-text">FCFA</span>
                    <input type="number" class="form-control" id="montant" [(ngModel)]="montant" name="montant" required>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label">Message (optionnel)</label>
                  <textarea class="form-control" id="message" [(ngModel)]="message" name="message"></textarea>
                </div>
                <button type="button" class="btn btn-success btn-block" (click)="initierPaiement()">Effectuer le don</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        margin-top: 10%;
        border: 2px solid #3B0458;
        border-radius: 15px;
        background-color: #F7E801;
      }

      .card-header {
        background-color: #3B0458;
        color: #F7E801;
        border-bottom: 2px solid #3B0458;
      }

      .input-group-text {
        background-color: #3B0458;
        color: #F7E801;
        border: none;
      }

      .btn-success {
        background-color: #3B0458;
        border: 2px solid #3B0458;
      }

      .btn-success:hover {
        background-color: #F7E801;
        color: #3B0458;
      }

      .form-control {
        border: 2px solid #3B0458;
        border-radius: 10px;
      }
    `,
  ],
})
export class FaireUnDonComponent implements OnInit {
  @Input() selectedCollecte: any;

  montant: number = 0;
  message: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    if (!this.selectedCollecte) {
      this.router.navigate(['/page-introuvable']);
    }
  }

  initierPaiement(): void {
    console.log('Initiation du paiement avec montant :', this.montant);

    if (this.selectedCollecte) {
      const requestBody = {
        price: this.montant,
        collecte_id: this.selectedCollecte.id
      };

      this.http.post<any>('http://127.0.0.1:8000/api/faireUnDon', requestBody).subscribe(
        (response) => {
          console.log('Réponse du serveur :', response);

          if (response && response.redirect_url) {
            console.log('Redirection vers :', response.redirect_url);
            // Redirection vers la page de paiement externe (exemple)
            window.location.href = response.redirect_url;
          } else {
            console.error('L\'URL de redirection est manquante dans la réponse.');
          }
        },
        (error) => {
          console.error('Erreur lors de l\'initiation du paiement :', error);
          // Gérer les erreurs selon vos besoins
        }
      );
    } else {
      console.error('Collecte non définie.');
    }
  }

}
