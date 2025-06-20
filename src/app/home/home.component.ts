import {Component, OnInit} from '@angular/core';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatIcon} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {RouterLink} from '@angular/router';
import {LineChartComponent} from '../charts/line-chart/line-chart.component';
import {PieChartComponent} from '../charts/pie-chart/pie-chart.component';
import {BarChartComponent} from '../charts/bar-chart/bar-chart.component';
import {MixedChartComponent} from '../charts/mixed-chart/mixed-chart.component';
import {DataService} from '../service/data.service';
import {UserData} from '../models/userData';

@Component({
  selector: 'app-home',
  imports: [
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatIcon,
    MatIconButton,
    RouterLink,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    MixedChartComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  dataChart1: UserData[] = [];
  dataChart2: UserData[] = [];
  dataChart3: UserData[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData1().subscribe(res => {
      this.dataChart1 = res.sort();
    });

    this.dataService.getData2().subscribe(res => {
      this.dataChart2 = res;
    });

    this.dataService.getData3().subscribe(res => {
      this.dataChart3 = res;
    });
  }

}
