import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DataComponent} from './data.component';
import {provideHttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataComponent],
      providers: [provideHttpClient(), {
        provide: ActivatedRoute,
        useValue: {
          snapshot: {paramMap: {get: () => 'mockId'}},
          queryParamMap: of({get: () => 'mockQuery'}),
        },
      },]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit calls service to fill the arrays ', () => {
    it('should fill the first array ', () => {
      fixture = TestBed.createComponent(DataComponent);


    });
  })
});
