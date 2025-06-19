import {Component, Input} from '@angular/core';
import {UserData} from '../../models/userData';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent {
  @Input() userData!: UserData[];


  loadData() {
    return {
      labels: this.getUserNames(),
      datasets: [
        {
          label: 'Tacos',
          data: this.getUserTacos(),
          backgroundColor: 'blueviolet',
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
