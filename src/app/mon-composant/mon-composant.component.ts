import { Component, OnInit } from '@angular/core';
import { AdminService } from '../components/service/admin.service';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css'],
})
export class MonComposantComponent implements OnInit {
  comptes: any[] = [];
  apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private adminService: AdminService) {}


  ngOnInit(): void {
    this.loadComptes();
  }

  loadComptes(): void {
    this.adminService.getListeCompteAReactiver().subscribe(response => {
      console.log(response);
      this.comptes = response.data;
    });
  }


  reactiverCompte(userId: number): void {
    this.adminService.reactiverCompte(userId).subscribe(response => {
      console.log(response.message);
      this.loadComptes(); // Recharger la liste des comptes après la réactivation
    });
  }
}
