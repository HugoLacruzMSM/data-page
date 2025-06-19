import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DataComponent} from './data/data.component';

export const routes: Routes = [
  {
    title: 'Home Page',
    path: 'home',
    component: HomeComponent,
  },
  {
    title: 'Data Page',
    path: 'data',
    component: DataComponent
  }
  , {path: '', redirectTo: 'home', pathMatch: 'full'},


];
