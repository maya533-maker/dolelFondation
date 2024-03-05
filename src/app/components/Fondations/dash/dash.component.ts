import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
})
export class DashComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.renderSubscriptionChart();
    this.renderCampaignChart();
  }

  renderSubscriptionChart() {
    const ctx = document.getElementById('subscriptionChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Abonnés',
          data: [100, 150, 200, 250, 300, 350],
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
            text: 'Fig 1: Graphique des abonnés',
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
          label: 'Nombre de collectes lancées',
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
            text: 'Fig 2: Graphique des collectes lancées',
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
