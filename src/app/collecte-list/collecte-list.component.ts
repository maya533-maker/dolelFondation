import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collecte-list',
  templateUrl: './collecte-list.component.html',
  styleUrls: ['./collecte-list.component.css']
})
export class CollecteListComponent implements OnInit {

  listeCollectes: any[] = [];
  apiUrl = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('http://127.0.0.1:8000/api/listeCollecte').subscribe(
      (response) => {
        this.listeCollectes = response.data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des collectes :', error);
      }
    );
  }

  redirigerVersDonation(collecteId: string): void {
    this.router.navigate(['/donation'], { queryParams: { id: collecteId } });
  }
}
