// collecte-cloture.component.ts
import { Component, OnInit } from '@angular/core';
import { Collecte } from 'src/app/collecte.model';
import { CollecteService } from 'src/app/components/service/collecte.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-collecte-cloture',
  templateUrl: './collecte-cloture.component.html',
  styleUrls: ['./collecte-cloture.component.css']
})
export class CollecteClotureComponent implements OnInit {
  collectesCloturees: Collecte[] = [];
  apiUrl = "http://127.0.0.1:8000/api";
  constructor(private collecteService: CollecteService) {}

  ngOnInit(): void {
    this.refreshCollectesCloturees();
  }

  decloturerCollecte(collecte: Collecte): void {
    if (collecte.id === undefined) {
      console.error('ID de la collecte indéfini.');
      return;
    }

    const collecteId: number = collecte.id; // Pas besoin de conversion, collecte.id est déjà de type number
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
            this.alertMessage('success', 'Déclôture réussie!', 'La collecte a été déclôturée avec succès.');
            this.refreshCollectesCloturees();
          },
          (error: any) => {
            console.error('Erreur lors de la déclôture de la collecte :', error);
            this.alertMessage('error', 'Erreur de déclôture!', 'Une erreur s\'est produite lors de la déclôture de la collecte.');
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

    const collecteId: number = collecte.id; // Pas besoin de conversion, collecte.id est déjà de type number
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
            this.alertMessage('success', 'Suppression réussie!', 'La collecte a été supprimée avec succès.');
            this.refreshCollectesCloturees();
          },
          (error: any) => {
            console.error('Erreur lors de la suppression de la collecte :', error);
            this.alertMessage('error', 'Erreur de suppression!', 'Une erreur s\'est produite lors de la suppression de la collecte.');
          }
        );
      }
    });
  }


  refreshCollectesCloturees(): void {
    this.collecteService.getCollectesCloturees().subscribe(
      (response: any) => {
        this.collectesCloturees = response.data;
        console.log('Collectes clôturées actualisées :', this.collectesCloturees);
      },
      (error: any) => {
        console.error("Erreur lors de la récupération des collectes clôturées :", error);
      }
    );
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
