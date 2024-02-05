import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil',
  template: `
    <app-dashboard></app-dashboard>
    <main class="mx-auto" style="margin-top: 8%;">
      <h3 class="" style="margin-left: 33%; margin-top: %">Informations du profil</h3>
      <div class="first"></div>
      <div class="second"></div>
      <div class="row g-4">
        <div class="col col-md-6 left-profil">
          <img class="container-fluid" style="width: 60%; margin-left: 30%;" [src]="donateur.image" alt="">
        </div>
        <div class="col-md-6 right-profil">
          <div class="mb-3 d-flex justify-content-between">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" [placeholder]="donateur.nom">
          </div>
          <div class="mb-3 d-flex justify-content-between">
            <label for="prenom" class="form-label">Prénom</label>
            <input type="text" class="form-control" id="prenom" [placeholder]="donateur.prenom">
          </div>
          <div class="mb-3 d-flex justify-content-between">
            <label for="telephone" class="form-label">Téléphone</label>
            <input type="text" class="form-control" id="telephone" [placeholder]="donateur.telephone">
          </div>
          <div class="mb-3 d-flex justify-content-between">
            <label for="email" class="form-label">Adresse email</label>
            <input type="email" class="form-control" id="email" [placeholder]="donateur.email">
          </div>
          <div class="mb-3 d-flex justify-content-between">
            <label for="motDePasse" class="form-label">Mot de passe</label>
            <input type="password" class="form-control" id="motDePasse" placeholder="********" required>
          </div>
        </div>
      </div>
      <h3 class="mb-5" style="margin-left: 33%;">Changer de mot de passe</h3>
      <div class="first"></div>
      <div class="second"></div>
      <div class="container pwd">
        <form action="" (submit)="modifierProfilDonateur()">
          <div class="mb-3 d-flex flex-wrap justify-content-between">
            <label for="currentPassword" class="form-label">Actuel mot de passe :</label>
            <input type="password" class="form-control" id="currentPassword" placeholder="********" required>
          </div>
          <div class="mb-3 d-flex flex-wrap justify-content-between">
            <label for="newPassword" class="form-label">Nouveau mot de passe :</label>
            <input type="password" class="form-control" id="newPassword" placeholder="********" [(ngModel)]="newPassword" required>
          </div>
          <div class="mb-3 d-flex flex-wrap justify-content-between">
            <label for="confirmNewPassword" class="form-label">Confirmer mot de passe :</label>
            <input type="password" class="form-control" id="confirmNewPassword" placeholder="********" [(ngModel)]="confirmNewPassword" required>
          </div>
          <button type="submit" class="btnSave p-2 mt-5">Enregistrer</button>
        </form>
      </div>
      <button class="btnSupprimerCompte p-2 mt-5" (click)="supprimerCompteDonateur()">Supprimer le compte</button>
    </main>
  `,
  styles: [`
    .right-profil input {
  width: 70%;
  border: 1px solid #3B0458;
}

.first {
  background-color: #3B0458;
  width: 150px;
  height: 4px;
  position: relative;
  top: -10px; /* Ajustez la valeur ici pour déplacer le trait vers le bas */
  left: 430px;
}

.second {
  background-color: #F7E801;
  border: 1px solid;
  border-radius: 100%;
  width: 20px;
  height: 15px;
  position: relative;
  top: -20px; /* Ajustez la valeur ici pour déplacer le cercle vers le bas */
  left: 490px;
}

.left-profil img {
  width: 80%;
  height: 50%;
}

.pwd {
  width: 60%;
}

.pwd input {
  width: 60%;
  border: 1px solid #3B0458;
}

.btnSave {
  border: none;
  background-color: #3B0458;
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
  `]
})
export class ProfilComponent {
  donateur: any = {}; // Assurez-vous que cet objet correspond à la structure de votre modèle donateur
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    // Chargez les détails du donateur lors de l'initialisation du composant
    this.loadDonateurDetails();
  }

  loadDonateurDetails(): void {
    // Utilisez l'ID du donateur à partir de la route ou de toute autre méthode nécessaire
    const donateurId = this.route.snapshot.params['id'];

    // Endpoint pour récupérer les détails du donateur
    const apiUrl = `http://127.0.0.1:8000/api/getDonateurDetails/${donateurId}`;

    this.http.get(apiUrl).subscribe(
      (response: any) => {
        this.donateur = response.data;
      },
      (error) => {
        console.error('Erreur lors du chargement des détails du donateur :', error);
      }
    );
  }

  modifierProfilDonateur(): void {
    // Endpoint pour modifier le profil du donateur
    const apiUrl = `http://127.0.0.1:8000/api/modifierProfil`;

    // Utilisez le service HttpClient pour envoyer les modifications au serveur
    this.http.post(apiUrl, this.donateur).subscribe(
      (response: any) => {
        this.alertMessage('success', 'Modification réussie!', 'Le profil a été modifié avec succès.');
      },
      (error) => {
        console.error('Erreur lors de la modification du profil du donateur :', error);
        this.alertMessage('error', 'Erreur de modification!', 'Une erreur s\'est produite lors de la modification du profil.');
      }
    );
  }

  supprimerCompteDonateur(): void {
    // Endpoint pour supprimer le compte du donateur
    const apiUrl = `http://127.0.0.1:8000/api/supprimerCompte`;

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
        // Utilisez le service HttpClient pour envoyer la demande de suppression au serveur
        this.http.post(apiUrl, {}).subscribe(
          () => {
            this.alertMessage('success', 'Suppression réussie!', 'Le compte a été supprimé avec succès.');

            // Naviguez vers la page de déconnexion après la suppression du compte
            this.router.navigate(['/accueil']);
          },
          (error) => {
            console.error('Erreur lors de la suppression du compte :', error);
            this.alertMessage('error', 'Erreur de suppression!', 'Une erreur s\'est produite lors de la suppression du compte.');
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
      timer: 1500
    });
  }
}
