import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-page-ad',
  templateUrl: './page-ad.component.html',
  styleUrls: ['./page-ad.component.css'],
})
export class PageAdComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.renderDonationChart();
    this.renderCampaignChart();
  }

  renderDonationChart() {
    const ctx = document.getElementById('donationChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Montant total des dons',
          data: [1000, 1500, 2000, 2500, 3000, 3500],
          backgroundColor: '#3B0458',
          borderColor: '#3B0458',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Fig 1: Graphique des dons',
            position: 'bottom',
            color: 'black',
            font: {
              size: 18,
              weight: 'bold'
            }
          }
        }
      }
    });
  }

  renderCampaignChart() {
    const ctx = document.getElementById('campaignChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Nombre de campagnes lancées',
          data: [5, 6, 7, 8, 9, 10],
          backgroundColor: '#f7e801',
          borderColor: '#f7e801',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Fig 2: Graphique des campagnes de collectes',
            position: 'bottom',
            color: 'black',
            font: {
              size: 18,
              weight: 'bold'
            }
          }
        }
      }
    });
  }
}
