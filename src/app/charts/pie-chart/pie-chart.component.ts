import {Component, Input} from '@angular/core';
import {BaseChartDirective} from 'ng2-charts';
import {EatenTacosData} from '../../models/eaten-tacos-data';

@Component({
  selector: 'app-pie-chart',
  imports: [
    BaseChartDirective
  ],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  @Input({required: true}) userDataMadrid!: EatenTacosData[];

  loadData() {
    return {
      labels: this.getUserNamesMadrid(),
      datasets: [
        {
          data: this.getUserTacosMadrid(),
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

  getUserTacosMadrid(): number[] {
    return this.userDataMadrid.map(item => item.tacos);
  };

  getUserNamesMadrid(): string[] {
    return this.userDataMadrid.map(item => item.name);
  }
}
