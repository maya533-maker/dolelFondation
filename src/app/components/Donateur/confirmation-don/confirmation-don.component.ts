import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation-don',
  templateUrl: './confirmation-don.component.html',
  styleUrls: ['./confirmation-don.component.css']
})
export class ConfirmationDonComponent implements OnInit {
  montant: number = 0;
  message: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer les données du don à partir des queryParams
    this.route.queryParams.subscribe(params => {
      this.montant = params['montant'];
      this.message = params['message'];
    });
  }
}
