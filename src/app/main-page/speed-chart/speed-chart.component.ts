import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { Route } from '../../models/route.model';

@Component({
  selector: 'app-speed-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speed-chart.component.html',
  styleUrl: './speed-chart.component.scss'
})
export class SpeedChartComponent implements OnChanges, AfterViewInit {
  @Input() route: Route | null = null;
  private chart: Chart | undefined;

  ngAfterViewInit() {
    this.initChart();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['route'] && this.route) {
      this.updateChart();
    }
  }

  initChart() {
    const ctx = document.getElementById('speedChart') as HTMLCanvasElement;
    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Speed (knots)',
          data: [],
          borderColor: 'blue',
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'minute'
            }
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  updateChart() {
    if (this.chart && this.route) {
      const data = this.route.points
        .filter(p => p[3] !== null) // Filter out points where speed is null
        .map(p => ({ x: p[2], y: p[3] as number })); // Ensure y is number

      this.chart.data.labels = data.map(d => new Date(d.x)); // Convert to Date for display
      this.chart.data.datasets[0].data = data.map(d => ({ x: d.x, y: d.y })); // Keep x as number for Chart.js
      this.chart.update();
    }
  }
}
