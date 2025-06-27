import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {provideHttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {PieChartComponent} from '../charts/pie-chart/pie-chart.component';
import {BarChartComponent} from '../charts/bar-chart/bar-chart.component';
import {LineChartComponent} from '../charts/line-chart/line-chart.component';
import {MixedChartComponent} from '../charts/mixed-chart/mixed-chart.component';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, PieChartComponent, BarChartComponent, LineChartComponent, MixedChartComponent],
      providers: [provideHttpClient(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {paramMap: {get: () => 'mockId'}},
            queryParamMap: of({get: () => 'mockQuery'}),
          },
        },]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
