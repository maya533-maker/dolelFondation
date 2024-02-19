import { Component, OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Collecte } from 'src/app/collecte.model';
import { CollecteService } from 'src/app/components/service/collecte.service';
import { AuthService } from 'src/app/components/service/auth.service';

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
  image!: File;
  titre!: any;
  description!: any;
  objectifFinancier!: any;
  numeroCompte!: any;
  typeUtilisateur: string | null = null;


  collecteSelectionnee: Collecte | undefined;

  constructor(private collecteService: CollecteService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.refreshCollectes();
    const userRole = this.authService.getUserRole();
    this.typeUtilisateur = userRole !== null ? userRole : 'valeur_par_defaut';
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
        this.refreshCollectes();
      },
      (error) => {
        console.error("Erreur lors de l'ajout de la collecte :", error);
      }
    );
  }

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
        this.collecteService.cloturerCollecte(collecte.id).subscribe(
          () => {
            this.alertMessage('success', 'Clôture réussie!', 'La collecte a été clôturée avec succès.');
            this.refreshCollectes();
          },
          (error) => {
            console.error('Erreur lors de la clôture de la collecte :', error);
            this.alertMessage('error', 'Erreur de clôture!', 'Une erreur s\'est produite lors de la clôture de la collecte.');
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
        this.collecteService.decloturerCollecte(collecte.id).subscribe(
          () => {
            this.alertMessage('success', 'Déclôture réussie!', 'La collecte a été déclôturée avec succès.');
            this.refreshCollectes();
          },
          (error) => {
            console.error('Erreur lors de la déclôture de la collecte :', error);
            this.alertMessage('error', 'Erreur de déclôture!', 'Une erreur s\'est produite lors de la déclôture de la collecte.');
          }
        );
      }
    });
  }


  modifierCollecte(collecte: Collecte): void {
    this.collecteSelectionnee = collecte;
    // Vérifiez si l'ID de la collecte est défini
    if (collecte.id === undefined) {
      console.error('ID de la collecte indéfini.');
      return;
    }

    // Définissez les valeurs des champs du formulaire avec les données de la collecte
    this.titre = collecte.titre;
    this.description = collecte.description;
    this.objectifFinancier = collecte.objectifFinancier;
    this.numeroCompte = collecte.numeroCompte;

    // Utilisez le routage pour naviguer vers la page de modification avec l'ID de la collecte
    this.router.navigate(['/modifier-col', collecte.id]);
  }


  filtrerCollectes(filtre: string) {
    this.filtreActif = filtre;
  }

  faireDon(collecte: Collecte) {
    console.log(`Faire un don pour la collecte "${collecte.titre}"`);
  }

  supprimerCollecte(collecte: Collecte): void {
    if (collecte.id === undefined) {
      console.error('ID de la collecte indéfini.');
      return;
    }

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
        this.collecteService.deleteCollecte(collecte.id).subscribe(
          () => {
            this.alertMessage('success', 'Suppression réussie!', 'La collecte a été supprimée avec succès.');
            this.refreshCollectes();
          },
          (error) => {
            console.error('Erreur lors de la suppression de la collecte :', error);
            this.alertMessage('error', 'Erreur de suppression!', 'Une erreur s\'est produite lors de la suppression de la collecte.');
          }
        );
      }
    });
  }

  alertMessage(icon: any, title: any, text: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      timer: 1500
    });
  }
}
