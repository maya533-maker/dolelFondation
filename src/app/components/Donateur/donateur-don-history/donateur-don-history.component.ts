import { Component } from '@angular/core';
import { HistoriqueDonsService } from '../historique-dons.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donateur-don-history',
  templateUrl: './donateur-don-history.component.html',
  styleUrls: ['./donateur-don-history.component.css']
})
export class DonateurDonHistoryComponent {
  historiqueDons: any[] = [];
  constructor(private historiqueDonsService: HistoriqueDonsService, private route: ActivatedRoute,) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const donId = params['donId'];
      this.loadHistoriqueDon();
    });
  }

  loadHistoriqueDon(): void {
    this.historiqueDonsService.getHistoriqueDons().subscribe(data => {
      this.historiqueDons = data;
    });
  }
}
