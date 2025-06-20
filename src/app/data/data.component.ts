import {Component, OnInit} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {EatenTacosData} from '../models/eaten-tacos-data';
import {DataService} from '../service/data.service';


@Component({
  selector: 'app-data',
  imports: [
    MatIconButton,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    RouterLink,
    MatIcon,
    MatTabGroup,
    MatTab,
    MatTableModule,
  ],
  templateUrl: './data.component.html',
  styleUrl: './data.component.scss'
})
export class DataComponent implements OnInit {
  dataSourceValencia: EatenTacosData[] = [];
  dataSourceMadrid: EatenTacosData[] = [];
  dataSourceBarcelona: EatenTacosData[] = [];
  displayedColumns: string[] = ['position', 'name', 'tacos', 'time'];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getDataValencia().subscribe(res => {
      this.dataSourceValencia = res;
    });

    this.dataService.getDataMadrid().subscribe(res => {
      this.dataSourceMadrid = res;
    });

    this.dataService.getDataBarcelona().subscribe(res => {
      this.dataSourceBarcelona = res;
    });
  }


}
