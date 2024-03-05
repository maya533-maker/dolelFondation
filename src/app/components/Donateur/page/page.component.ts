import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    this.renderDonationHistoryChart();
    this.renderParticipationChart();
  }

  renderDonationHistoryChart() {
    const ctx = document.getElementById('donationHistoryChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Historique des Dons',
          data: [50, 60, 70, 80, 90, 100],
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
            text: 'Fig 1: Historique des Dons',
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

  renderParticipationChart() {
    const ctx = document.getElementById('participationChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Fondation 1', 'Fondation 2', 'Fondation 3', 'Fondation 4', 'Fondation 5'],
        datasets: [{
          label: 'Nombre de Participations',
          data: [20, 30, 25, 35, 40],
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
            text: 'Fig 2: Participation aux Collectes par Fondation',
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
