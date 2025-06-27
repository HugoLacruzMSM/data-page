import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {PieChartComponent} from '../charts/pie-chart/pie-chart.component';
import {BarChartComponent} from '../charts/bar-chart/bar-chart.component';
import {MixedChartComponent} from '../charts/mixed-chart/mixed-chart.component';
import {DataService} from '../service/data.service';
import {EatenTacosStore} from '../store/eaten-tacos.store';
import {LineChartComponent} from '../charts/line-chart/line-chart.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-home',
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatIcon,
    MatIconButton,
    RouterLink,
    PieChartComponent,
    BarChartComponent,
    MixedChartComponent,
    LineChartComponent,

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [EatenTacosStore],
})
export class HomeComponent implements OnInit {
  eatenTacosStore = inject(EatenTacosStore);

  dataChartValencia = this.eatenTacosStore.eatenTacosValencia;
  dataChartMadrid = this.eatenTacosStore.eatenTacosMadrid;
  dataChartBarcelona = this.eatenTacosStore.eatenTacosBarcelona;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.eatenTacosStore.loadEatenTacosValencia();
    this.eatenTacosStore.loadEatenTacosMadrid();
    this.eatenTacosStore.loadEatenTacosBarcelona();
    this.eatenTacosStore.setEatenTacosValencia()
  }


}
