import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-profil-fond',
  template: `
    <app-dashf></app-dashf>

    <main class="container" style="margin-top: 8%;">
      <h3 class="text-center">Informations du profil</h3>
      <form (submit)="modifierProfilFondation()">
        <div class="row justify-content-center mb-4">
          <div class="col-md-6">
            <img
              class="img-fluid"
              src="https://i.pinimg.com/736x/41/c4/f5/41c4f51bcd17b297aa8f8d94a2ac1d95.jpg"
              alt=""
            />
          </div>
          <div class="col-md-6">
            <div class="mb-3">
              <label for="nom" class="form-label">Nom</label>
              <input
                type="text"
                class="form-control"
                id="nom"
                [(ngModel)]="fondation.nom"
                name="nom"
              />
            </div>
            <div class="mb-3">
              <label for="adresse" class="form-label">Adresse</label>
              <input
                type="text"
                class="form-control"
                id="adresse"
                [(ngModel)]="fondation.adresse"
                name="adresse"
              />
            </div>
            <div class="mb-3">
              <label for="numeroenregistrement" class="form-label"
                >Numéro Enregistrement</label
              >
              <input
                type="text"
                class="form-control"
                id="numeroenregistrement"
                [(ngModel)]="fondation.numeroenregistrement"
                name="numeroenregistrement"
              />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Adresse email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                [(ngModel)]="fondation.email"
                name="email"
              />
            </div>
            <div class="mb-3">
              <label for="telephone" class="form-label">Téléphone</label>
              <input
                type="text"
                class="form-control"
                id="telephone"
                [(ngModel)]="fondation.telephone"
                name="telephone"
              />
            </div>
          </div>
        </div>
        <h3 class="text-center mb-5">Changer de mot de passe</h3>
        <div class="row justify-content-center mb-4">
          <div class="col-md-6">
            <div class="mb-3">
              <label for="currentPassword" class="form-label"
                >Actuel mot de passe :</label
              >
              <input
                type="password"
                class="form-control"
                id="currentPassword"
                placeholder="********"
                required
              />
            </div>
            <div class="mb-3">
              <label for="newPassword" class="form-label"
                >Nouveau mot de passe :</label
              >
              <input
                type="password"
                class="form-control"
                id="newPassword"
                placeholder="********"
                [(ngModel)]="newPassword"
                required
              />
            </div>
            <div class="mb-3">
              <label for="confirmNewPassword" class="form-label"
                >Confirmer mot de passe :</label
              >
              <input
                type="password"
                class="form-control"
                id="confirmNewPassword"
                placeholder="********"
                [(ngModel)]="confirmNewPassword"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary btn-save">
              Enregistrer
            </button>
          </div>
        </div>
      </form>
      <div class="row justify-content-center">
        <button
          class="btn btn-danger btn-supprimer-compte"
          (click)="supprimerCompteFondation()"
        >
          Supprimer le compte
        </button>
      </div>
    </main>
  `,
  styles: [
    `/* Ajoutez ces styles CSS à votre fichier de style */

.right-profil input {
  width: 70%;
  border: 1px solid #3b0458;
}

.first {
  background-color: #3b0458;
  width: 150px;
  height: 4px;
  position: relative;
  top: -10px; /* Ajustez la valeur ici pour déplacer le trait vers le bas */
  left: 430px;
}

.second {
  background-color: #f7e801;
  border: 1px solid;
  border-radius: 100%;
  width: 20px;
  height: 15px;
  position: relative;
  top: -20px; /* Ajustez la valeur ici pour déplacer le cercle vers le bas */
  left: 490px;
}

.pwd input {
  width: 60%;
  border: 1px solid #3b0458;
}

.btnSave {
  border: none;
  background-color: #3b0458;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  margin-left: 90%;
}

.btnSupprimerCompte {
  border: none;
  background-color: red;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  margin-left: 90%;
}

.left-profil img {
  width: 100%;
  height: auto;
}

.pwd {
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.btn-save,
.btn-supprimer-compte {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
}

    `,
  ],
})
export class ProfilFondComponent {
  fondation: any = {}; // Assurez-vous que cet objet correspond à la structure de votre modèle fondation
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  modifierProfilFondation() {
    // Appeler votre service pour modifier le profil de la fondation
    this.authService.modifierProfil(this.fondation).subscribe(
      (response) => {
        // Traiter la réponse de l'API si nécessaire
        console.log('Profil de la fondation modifié avec succès', response);
        this.alertMessage(
          'success',
          'Modification réussie!',
          'Le profil a été modifié avec succès.'
        );
        this.clearForm();
      },
      (error) => {
        // Gérer les erreurs en cas d'échec de la modification du profil
        console.error(
          'Erreur lors de la modification du profil de la fondation : ',
          error
        );
        this.alertMessage(
          'error',
          'Erreur de modification!',
          "Une erreur s'est produite lors de la modification du profil."
        );
      }
    );
  }

  supprimerCompteFondation(): void {
    const apiUrl = `http://127.0.0.1:8000/api/supprimerCompteFondation`;

    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer votre compte?',
      text: 'Cette action est irréversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.put(apiUrl, {}).subscribe(
          () => {
            this.alertMessage(
              'success',
              'Suppression réussie!',
              'Le compte a été supprimé avec succès.'
            );
            this.router.navigate(['/accueil']);
          },
          (error) => {
            console.error('Erreur lors de la suppression du compte :', error);
            this.alertMessage(
              'error',
              'Erreur de suppression!',
              "Une erreur s'est produite lors de la suppression du compte."
            );
          }
        );
      }
    });
  }

  alertMessage(icon: any, title: any, text: any): void {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      timer: 1500,
    });
  }

  clearForm(): void {
    this.fondation = {}; // Videz l'objet fondation
    this.newPassword = ''; // Réinitialiser le nouveau mot de passe
    this.confirmNewPassword = ''; // Réinitialiser la confirmation du nouveau mot de passe
  }
}
