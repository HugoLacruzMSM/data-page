import {Component, Input} from '@angular/core';
import {EatenTacosData} from '../../models/eaten-tacos-data';
import {BaseChartDirective} from 'ng2-charts';
import {ChartData, ChartOptions} from 'chart.js';

@Component({
  selector: 'app-mixed-chart',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './mixed-chart.component.html',
  styleUrl: './mixed-chart.component.scss'
})
export class MixedChartComponent {
  @Input() userDataValencia!: EatenTacosData[];


  loadData(): ChartData {
    return {
      labels: this.getUserNamesValencia(),
      datasets: [
        {
          type: 'bar',
          label: 'User Tacos',
          data: this.getUserTacosValencia(),
          yAxisID: 'y',
        },
        {
          type: 'line',
          label: 'User Time',
          data: this.getUserTimeValencia(),
          yAxisID: "y1",
        },
      ]
    }
  }

  loadOptions(): ChartOptions {
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

  getUserTacosValencia(): number[] {
    return this.userDataValencia.map(item => item.tacos);
  }

  getUserNamesValencia(): string[] {
    return this.userDataValencia.map(item => item.name);
  }

  getUserTimeValencia(): number[] {
    return this.userDataValencia.map(item => item.time);
  }
}
