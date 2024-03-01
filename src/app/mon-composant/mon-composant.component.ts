import { Component, OnInit } from '@angular/core';
import { AdminService } from '../components/service/admin.service';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css'],
})
export class MonComposantComponent implements OnInit {

  comptesSupprimes: any[] = [];
  compteSelectionne: any | null = null;
  messageErreur: string = '';

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getComptesSupprimes();
  }

  getComptesSupprimes(): void {
    this.adminService.getListeComptesSupprimes().subscribe(
      (response: any) => {
        if (response.status) {
          this.comptesSupprimes = response.data;
        } else {
          this.messageErreur = response.message;
        }
      },
      (error: any) => {
        console.error('Erreur lors de la récupération de la liste des comptes supprimés :', error);
      }
    );
  }

  reactiverCompte(compteId: number): void {
    if (this.compteSelectionne !== null) {
      this.adminService.reactiverCompte(compteId).subscribe(
        () => {
          console.log('Compte réactivé avec succès.');

          this.getComptesSupprimes();
        },
        (error) => {
          console.error('Erreur lors de la réactivation du compte :', error);
        }
      );
    } else {
      console.error('Aucun compte sélectionné.');
    }
  }

  
  selectionnerCompte(compte: any): void {
    this.compteSelectionne = compte;
  }
}
