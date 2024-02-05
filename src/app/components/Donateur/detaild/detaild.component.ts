import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detaild',
  templateUrl: './detaild.component.html',
  styleUrls: ['./detaild.component.css']
})
export class DetaildComponent implements OnInit {
  collecteId: number = 0;
  collecteDetails: any;
  listeCollectes: any[] = [];
  fondations: any[] = [];  // Ajoutez un tableau pour stocker la liste des fondations sélectionnables
  selectedFondationId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.collecteId = +this.route.snapshot.paramMap.get('id')! || 0;
    this.loadCollecteDetails();
    this.loadFondations();
  }

  loadCollecteDetails(): void {
    this.getCollecteDetails(this.collecteId).subscribe((data) => {
      this.collecteDetails = data;
    });
  }

  getCollecteDetails(collecteId: number): Observable<any> {
    const apiUrl = `http://127.0.0.1:8000/api/listeCollecte/${collecteId}`;
    return this.http.get(apiUrl);
  }

  loadFondations(): void {
    const apiUrl = 'http://127.0.0.1:8000/api/listeFondations';  // Remplacez par l'URL réelle pour obtenir la liste des fondations
    this.http.get(apiUrl).subscribe((data: any) => {
      this.fondations = data;
    });
  }

  sAbonner(): void {
    if (this.selectedFondationId === 0) {
      Swal.fire('Erreur', 'Veuillez sélectionner une fondation.', 'error');
      return;
    }

    const apiUrl = `http://127.0.0.1:8000/api/sabonner/${this.selectedFondationId}`;

    this.http.post(apiUrl, {}).subscribe(
      (response) => {
        Swal.fire('Succès', 'Vous êtes abonné avec succès à la fondation!', 'success');
      },
      (error) => {
        console.error('Erreur lors de l\'abonnement à la fondation:', error);
        Swal.fire('Erreur', 'Échec de l\'abonnement à la fondation.', 'error');
      }
    );
  }
}
