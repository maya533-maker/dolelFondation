// donateur-list.component.ts
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DonateurService } from '../../service/donateur.service';

@Component({
  selector: 'app-donateur-list',
  templateUrl: './donateur-list.component.html',
  styleUrls: ['./donateur-list.component.css']
})
export class DonateurListComponent implements OnInit {
  donateurs: any[] = [];
  image: string = '';
  prenom: string = '';
  nom: string = '';
  telephone: string = '';
  email: string = '';
  motDePasse: string = '';

  apiUrl = "http://127.0.0.1:8000/api";


  constructor(private donateurService: DonateurService) {}

  ngOnInit(): void {
    this.refreshDonateurs();
  }

  refreshDonateurs(): void {
    this.donateurService.getDonateurs().subscribe((response: any) => {
      this.donateurs = response.data;
      // console.log('Donateurs actualisés :', this.donateurs);
    });
  }

  supprimerDonateur(donateur: any): void {
    if (donateur.id === undefined) {
      console.error('ID du donateur indéfini.');
      return;
    }

    Swal.fire({
      title: 'Êtes-vous sûr de vouloir supprimer ce donateur?',
      text: 'Cette action est irréversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.donateurService.deleteUtilisateur(donateur.id).subscribe(
          () => {
            this.alertMessage('success', 'Suppression réussie!', 'Le donateur a été supprimé avec succès.');
            this.refreshDonateurs();
          },
          (error) => {
            // console.error('Erreur lors de la suppression du donateur :', error);
            this.alertMessage('error', 'Erreur de suppression!', 'Une erreur s\'est produite lors de la suppression du donateur.');
          }
        );
      }
    });
  }

  bloquerDonateur(donateur: any): void {
    if (donateur.id === undefined) {
      console.error('ID du donateur indéfini.');
      return;
    }

    this.donateurService.bloquerUtilisateur(donateur.id).subscribe(
      () => {
        this.alertMessage('success', 'Blocage réussi!', 'Le donateur a été bloqué avec succès.');
        this.refreshDonateurs();
      },
      (error) => {
        console.error('Erreur lors du blocage du donateur :', error);
        this.alertMessage('error', 'Erreur de blocage!', 'Une erreur s\'est produite lors du blocage du donateur.');
      }
    );
  }

  debloquerDonateur(donateur: any): void {
    if (donateur.id === undefined) {
      console.error('ID du donateur indéfini.');
      return;
    }

    this.donateurService.debloquerUtilisateur(donateur.id).subscribe(
      () => {
        this.alertMessage('success', 'Déblocage réussi!', 'Le donateur a été débloqué avec succès.');
        this.refreshDonateurs();
      },
      (error) => {
        console.error('Erreur lors du déblocage du donateur :', error);
        this.alertMessage('error', 'Erreur de déblocage!', 'Une erreur s\'est produite lors du déblocage du donateur.');
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
