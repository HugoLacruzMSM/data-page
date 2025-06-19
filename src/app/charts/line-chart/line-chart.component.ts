import {Component, Input} from '@angular/core';
import {Chart, registerables} from 'chart.js';
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

  loadData() {
    return {
      labels: this.getUserNames(),
      datasets: [
        {
          label: 'Tacos',
          data: this.getUserTacos(),
          backgroundColor: 'red'
        },
      ]
    }
  }

  loadOptions() {
    return {
      maintainAspectRatio: true,
      responsive: true
    }
  }

  getUserTacos(): number[] {
    return this.userData.map(item => item.tacos);
  }

  getUserNames(): string[] {
    return this.userData.map(item => item.name);
  }
}
