import { Component, OnInit } from '@angular/core';
import { AdminService } from '../components/service/admin.service';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css'],
})
export class MonComposantComponent implements OnInit {
  public maFonction() {
    return 'Test réussi!';
  }

  comptesSupprimes: number[] = [];
  compteSelectionne: number | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.getComptesSupprimes();
  }

  getComptesSupprimes(): void {
    this.adminService.getListeComptesSupprimes().subscribe(
      (comptes: number[]) => {
        this.comptesSupprimes = comptes;
      },
      (error: any) => { // Spécifier le type de error comme any
        console.error('Erreur lors de la récupération de la liste des comptes supprimés :', error);
      }
    );
  }


  selectionnerCompte(compteId: number): void {
    this.compteSelectionne = compteId;
  }

  reactiverCompte(): void {
    if (this.compteSelectionne !== null) {
      this.adminService.reactiverCompte(this.compteSelectionne).subscribe(
        () => {
          console.log('Compte réactivé avec succès.');
          // Traitez la réponse ou effectuez des actions supplémentaires si nécessaire
        },
        (error) => {
          console.error('Erreur lors de la réactivation du compte :', error);
          // Traitez l'erreur de manière appropriée
        }
      );
    } else {
      console.error('Aucun compte sélectionné.');
    }
  }
}
