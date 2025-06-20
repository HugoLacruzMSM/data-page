import {Component, Input} from '@angular/core';
import {UserData} from '../../models/userData';
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
  @Input() userData1!: UserData[];
  @Input() userData2!: UserData[];


  loadData(): ChartData {
    return {
      labels: this.getUserNames1(),
      datasets: [
        {
          type: 'bar',
          label: 'User Tacos',
          data: this.getUserTacos1(),
          yAxisID: 'y',
        },
        {
          type: 'line',
          label: 'User Time',
          data: this.getUserTime1(),
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

  getUserTacos1(): number[] {
    return this.userData1.map(item => item.tacos);
  }

  getUserNames1(): string[] {
    return this.userData1.map(item => item.name);
  }

  getUserTime1(): number[] {
    return this.userData1.map(item => item.time);
  }

  getUserNames2(): string[] {
    return this.userData2.map(item => item.name);
  }
}
