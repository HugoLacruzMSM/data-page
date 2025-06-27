import {Component, Input} from '@angular/core';
import {EatenTacosData} from '../../models/eaten-tacos-data';
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
  @Input() userDataBarcelona!: EatenTacosData[];


  loadData() {
    return {
      labels: this.getUserNamesBarcelona(),
      datasets: [
        {
          label: 'Tacos',
          data: this.getUserTacosBarcelona(),
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

  getUserTacosBarcelona(): number[] {
    return this.userDataBarcelona.map(item => item.tacos);
  }

  getUserNamesBarcelona(): string[] {
    return this.userDataBarcelona.map(item => item.name);
  }

}
