import {Component, Input} from '@angular/core';
import {Chart, ChartData, ChartOptions, registerables} from 'chart.js';
import {EatenTacosData} from '../../models/eaten-tacos-data';
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

  @Input({required: true}) userDataValencia!: EatenTacosData[];

  loadData(): ChartData<'line'> {
    return {
      labels: this.getUserNamesValencia(),
      datasets: [
        {
          label: 'User Tacos',
          data: this.getUserTacosValencia(),
          yAxisID: 'y',
        },
        {
          label: 'User Time',
          data: this.getUserTimeValencia(),
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

