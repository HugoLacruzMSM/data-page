import {Component, OnInit} from '@angular/core';
import {MatIconButton} from '@angular/material/button';
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {UserData} from '../models/userData';
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
  dataSource1: UserData[] = [];
  dataSource2: UserData[] = [];
  dataSource3: UserData[] = [];
  displayedColumns1: string[] = ['position', 'name', 'tacos', 'time'];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getData1().subscribe(res => {
      this.dataSource1 = res;
    });

    this.dataService.getData2().subscribe(res => {
      this.dataSource2 = res;
    });

    this.dataService.getData3().subscribe(res => {
      this.dataSource3 = res;
    });
  }


}
