import {fakeAsync, TestBed} from '@angular/core/testing';
import {DataService} from '../service/data.service';
import {EatenTacosStore} from './eaten-tacos.store';
import {of} from 'rxjs';
import {EatenTacosData} from '../models/eaten-tacos-data';

describe('SignalStore', () => {
  let store: any;
  const value1 = [{
    position: 1,
    name: "Juan \"El Jalapeño\"",
    tacos: 24,
    time: 12.5
  }];
  const value2: EatenTacosData[] = [{
    position: 9,
    name: "Hugo Guacala",
    tacos: 40,
    time: 12.0
  }];


  const mockService = {
    getDataValencia: jest.fn().mockReturnValue(of(value2)),
    getDataMadrid: jest.fn().mockReturnValue(of(value1)),
    getDataBarcelona: jest.fn().mockReturnValue(of(value1)),
    sleep: jest.fn().mockResolvedValue(1000),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: DataService, useValue: mockService}, EatenTacosStore],
    });
    store = TestBed.inject(EatenTacosStore);
  })
  it('Should create an objects with the return value service', fakeAsync(() => {
    store.loadEatenTacosValencia();
    expect(mockService.getDataValencia).toHaveBeenCalled();

    store.loadEatenTacosMadrid();
    expect(mockService.getDataMadrid).toHaveBeenCalled();

    store.loadEatenTacosBarcelona();
    expect(mockService.getDataBarcelona).toHaveBeenCalled();


    const state = store
    expect(state.eatenTacosValencia()).toStrictEqual(value2);
    expect(state.eatenTacosMadrid()).toStrictEqual(value1);
    expect(state.eatenTacosBarcelona()).toStrictEqual(value1);

  }))

  it('Should set a new item to the store', (async () => {
    store.setEatenTacosValencia();

    await expect(mockService.sleep).toHaveBeenCalled();
    const state = store
    expect(state.eatenTacosValencia()).toEqual(value2);


  }))
});
