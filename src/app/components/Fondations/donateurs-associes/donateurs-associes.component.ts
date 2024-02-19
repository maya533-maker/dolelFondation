import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-donateurs-associes',
  templateUrl: './donateurs-associes.component.html',
  styleUrls: ['./donateurs-associes.component.css'],
})
export class DonateursAssociesComponent implements OnInit {
  @Input() collecteId!: number;
  donateurs: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getDonateursAssocies();
  }

  getDonateursAssocies(): void {
    const url = `http://127.0.0.1:8000/api/listeDonateurADesDons/${this.collecteId}`;
    this.http.get<any[]>(url).subscribe((data) => {
      this.donateurs = data;
    });
  }
}
