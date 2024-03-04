import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Collecte } from 'src/app/collecte.model';
import { CollecteService } from 'src/app/components/service/collecte.service';
import { AuthService } from 'src/app/components/service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-collecte',
  templateUrl: './collecte.component.html',
  styleUrls: ['./collecte.component.css'],
})
export class CollecteComponent implements OnInit {
  collecte: Collecte = new Collecte();
  collectes: Collecte[] = [];
  filtreActif: string = 'tout';
  nouvelleCollecte: Collecte = new Collecte();
  image: File | null = null;
  titre!: any;
  description!: any;
  objectifFinancier!: any;
  numeroCompte!: any;
  typeUtilisateur: string = '';
  apiUrl = 'http://127.0.0.1:8000/api';
  collecteSelectionnee: Collecte = new Collecte();
  collecteSelectionneeId: number | undefined;
  constructor(
    private collecteService: CollecteService,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.refreshCollectes();
    this.typeUtilisateur = this.authService.getUserRole();
  }

  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }

  ajouterCollecte(): void {
    const addCollect = new FormData();
    addCollect.append('titre', this.titre);
    addCollect.append('image', this.image as Blob);
    addCollect.append('description', this.description);
    addCollect.append('objectifFinancier', this.objectifFinancier);
    addCollect.append('numeroCompte', this.numeroCompte);

    this.collecteService.addCollecte(addCollect).subscribe(
      (response) => {
        console.log("Réponse de l'API après ajout :", response);
        // Afficher l'alerte de succès
        this.alertMessage(
          'success',
          'Ajout réussi!',
          'La collecte a été ajoutée avec succès.'
        );
        // Vider les champs et fermer le modal
        this.resetFields();
      },
      (error) => {
        console.error("Erreur lors de l'ajout de la collecte :", error);
      }
    );
  }

  modifierCollecte() {
    const formData = new FormData();
    formData.append('titre', this.collecteSelectionnee.titre);
    formData.append('description', this.collecteSelectionnee.description);
    formData.append(
      'objectifFinancier',
      this.collecteSelectionnee.objectifFinancier.toString()
    );
    formData.append('numeroCompte', this.collecteSelectionnee.numeroCompte);
    // Vérifiez si une nouvelle image a été sélectionnée
    if (this.image) {
      formData.append('image', this.image as Blob);
    }
    // Assurez-vous que this.collecteSelectionnee.id contient l'ID correct de la collecte à modifier
    const url = `${this.apiUrl}/modifierCollecte/${this.collecteSelectionnee.id}`;

    this.http.post(url, formData).subscribe(
      (response) => {
        console.log("Réponse de l'API après modification :", response);
        // Afficher l'alerte de succès
        this.alertMessage(
          'success',
          'Modification réussie!',
          'La collecte a été modifiée avec succès.'
        );
        // Vider les champs et fermer le modal
        this.resetFields();
      },
      (error) => {
        console.error("Erreur lors de la modification de la collecte :", error);
      }
    );
  }

  resetFields(): void {
    // Vider les champs
    this.titre = '';
    this.description = '';
    this.objectifFinancier = '';
    this.numeroCompte = '';
    this.image = null;
    // Fermer les modals
    document.getElementById('exampleModal')?.click();
    document.getElementById('exampleModal2')?.click();
  }

  // refreshCollectes(): void {
  //   this.collecteService.getCollectes().subscribe((collectes: Collecte[]) => {
  //     this.collectes = collectes;
  //   });
  // }

  refreshCollectes(): void {
    this.collecteService.getCollectes().subscribe((response: any) => {
      this.collectes = response.data;
      console.log('Collectes actualisées :', this.collectes);
    });
  }
  afficherDetailsCollecte(collecte: Collecte): void {
    // Utilisez le routage pour naviguer vers la page de détails avec l'ID de la collecte
    this.router.navigate(['/detail-col', collecte.id]);
  }

  cloturerCollecte(collecte: Collecte): void {
    if (collecte.id === undefined) {
      console.error('ID de la collecte indéfini.');
      return;
    }

    const collecteId: number = collecte.id as number;
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir clôturer cette collecte?',
      text: 'Cette action est irréversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, clôturer!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.collecteService.cloturerCollecte(collecteId).subscribe(
          () => {
            this.alertMessage(
              'success',
              'Clôture réussie!',
              'La collecte a été clôturée avec succès.'
            );
            this.refreshCollectes();
          },
          (error) => {
            console.error('Erreur lors de la clôture de la collecte :', error);
            this.alertMessage(
              'error',
              'Erreur de clôture!',
              "Une erreur s'est produite lors de la clôture de la collecte."
            );
          }
        );
      }
    });
  }

  decloturerCollecte(collecte: Collecte): void {
    if (collecte.id === undefined) {
      console.error('ID de la collecte indéfini.');
      return;
    }

    const collecteId: number = collecte.id as number;
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir déclôturer cette collecte?',
      text: 'Cette action est irréversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, déclôturer!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.collecteService.decloturerCollecte(collecteId).subscribe(
          () => {
            this.alertMessage(
              'success',
              'Déclôture réussie!',
              'La collecte a été déclôturée avec succès.'
            );
            this.refreshCollectes();
          },
          (error) => {
            console.error(
              'Erreur lors de la déclôture de la collecte :',
              error
            );
            this.alertMessage(
              'error',
              'Erreur de déclôture!',
              "Une erreur s'est produite lors de la déclôture de la collecte."
            );
          }
        );
      }
    });
  }

  supprimerCollecte(collecte: Collecte): void {
    if (collecte.id === undefined) {
      console.error('ID de la collecte indéfini.');
      return;
    }

    const collecteId: number = collecte.id as number;
    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer cette collecte?',
      text: 'Cette action est irréversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.collecteService.deleteCollecte(collecteId).subscribe(
          () => {
            this.alertMessage(
              'success',
              'Suppression réussie!',
              'La collecte a été supprimée avec succès.'
            );
            this.refreshCollectes();
          },
          (error) => {
            console.error(
              'Erreur lors de la suppression de la collecte :',
              error
            );
            this.alertMessage(
              'error',
              'Erreur de suppression!',
              "Une erreur s'est produite lors de la suppression de la collecte."
            );
          }
        );
      }
    });
  }

  selectionnerCollecte(collecte: Collecte) {
    console.log("ID de la collecte sélectionnée :", collecte.id);
    this.collecteSelectionnee = collecte;
    console.log("Collecte sélectionnée :", this.collecteSelectionnee);
  }



  filtrerCollectes(filtre: string) {
    this.filtreActif = filtre;
  }

  faireDon(collecte: Collecte) {
    console.log(`Faire un don pour la collecte "${collecte.titre}"`);
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
