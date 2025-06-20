import {Component, Input} from '@angular/core';
import {Chart, ChartData, ChartOptions, registerables} from 'chart.js';
import {UserData} from '../../models/userData';
import {BaseChartDirective} from 'ng2-charts';

Chart.register(...registerables)

@Component({
  selector: 'app-line-chart',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.scss'
})
export class LineChartComponent {

  @Input({required: true}) userData!: UserData[];

  loadData(): ChartData<'line'> {
    return {
      labels: this.getUserNames(),
      datasets: [
        {
          label: 'User Tacos',
          data: this.getUserTacos(),
          yAxisID: 'y',
        },
        {
          label: 'User Time',
          data: this.getUserTime(),
          yAxisID: "y1",
        },
      ]
    }
  }

  loadOptions(): ChartOptions<'line'> {
    return {
      maintainAspectRatio: true,
      responsive: true,
      scales: {
        y: {
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'User Tacos'
          }
        }, y1: {
          type: 'linear',
          position: 'right',
          title: {
            display: true,
            text: 'User time'
          }
        }
      }
    }
  }

  getUserTacos(): number[] {
    return this.userData.map(item => item.tacos);
  }

  getUserNames(): string[] {
    return this.userData.map(item => item.name);
  }

  getUserTime(): number[] {
    return this.userData.map(item => item.time);
  }
}

