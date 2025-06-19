import {Component, Input} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {UserData} from '../../models/userData';

@Component({
  selector: 'app-pie-chart',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  @Input({required: true}) userData!: UserData[];

  loadData() {
    return {
      labels: this.getUserNames(),
      datasets: [
        {
          data: this.getUserTacos(),
        },
      ]
    }
  }

  loadOptions() {
    return {
      maintainAspectRatio: false,
      responsive: true,
    }
  }

  getUserTacos(): number[] {
    return this.userData.map(item => item.tacos);
  };

  getUserNames(): string[] {
    return this.userData.map(item => item.name);
  }
}
