import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  map: any;

  ngOnInit(): void {
    this.initialiserCarte();
    this.obtenirLocalisation();
  }

  obtenirLocalisation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          // Ajoutez un marqueur à la carte à la position de l'utilisateur
          L.marker([latitude, longitude]).addTo(this.map);

          // Centrez la carte sur la position de l'utilisateur
          this.map.setView([latitude, longitude], 13);
        },
        (error) => {
          console.error("Erreur lors de la récupération de la position :", error.message);
        }
      );
    } else {
      console.error("La géolocalisation n'est pas prise en charge par votre navigateur.");
    }
  }

  initialiserCarte(): void {
    this.map = L.map('maCarte').setView([0, 0], 2); // Coordonnées et niveau de zoom initiaux
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);
  }
}
