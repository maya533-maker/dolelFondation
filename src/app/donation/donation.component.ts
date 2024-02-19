import { Component, OnInit } from '@angular/core';
import { DonationService } from '../donation.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  price: number = 0;
  collecteId: string = '';
  collectes: any[] = [];

  constructor(private route: ActivatedRoute, private donationService: DonationService,private router: Router, ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.collecteId = params['id'];
    });
  }

  faireDon() {
    const donationData = {
      price: this.price,
      collecte_id: this.collecteId
    };

    // Appel de la méthode faireDon() du service
    this.donationService.faireUnDon(donationData).subscribe(response => {
      console.log(response); // Afficher la réponse
      // Appel de la méthode initierPaiement() avec les données de don
      this.initierPaiement(donationData);
    });
  }

  initierPaiement(donationData: any): void {
    this.donationService.initierPaiement(donationData).subscribe(
      (redirectUrl: string) => {
        // Redirection vers l'URL de paiement de Paytech
        // window.location.href = redirectUrl;
        // this.router.navigate(['/confirmation-don']);
      },
      (error: any) => {
        console.error("Erreur lors de l'initiation du paiement :", error);
      }
    );
  }


 // Fonction de validation
 validerMontant(montant: number): boolean {
  if (montant >= 100) {
    return true;
  } else {
    // Utilisation de Swal pour afficher l'alerte
    this.alertMessage('error', 'Erreur', 'Le montant doit être supérieur ou égal à 100 XOF');
    return false;
  }
}

// Méthode pour afficher un message d'alerte avec Swal
alertMessage(icon: any, title: any, text: any) {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
    timer: 1500
  });
}
}
