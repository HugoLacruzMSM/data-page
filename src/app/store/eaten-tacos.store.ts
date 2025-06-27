import {patchState, signalStore, withMethods, withState} from '@ngrx/signals';
import {inject} from '@angular/core';
import {DataService} from '../service/data.service';
import {EatenTacosData} from '../models/eaten-tacos-data';


export type eatenTacosState = {
  eatenTacosValencia: EatenTacosData[];
  eatenTacosMadrid: EatenTacosData[];
  eatenTacosBarcelona: EatenTacosData[];
  loading: boolean;

}
const initialState: eatenTacosState = {
  eatenTacosValencia: [],
  eatenTacosMadrid: [],
  eatenTacosBarcelona: [],
  loading: false,
}

export const EatenTacosStore = signalStore(
  {providedIn: 'root', protectedState: false},
  withState(initialState),

  withMethods(
    (store, dataService = inject(DataService)) => ({

      loadEatenTacosValencia(): void {
        patchState(store, {loading: true});
        dataService.getDataValencia().subscribe(eatenTacos => {
          patchState(store, {eatenTacosValencia: [...eatenTacos], loading: false});
        })
      },
      loadEatenTacosBarcelona(): void {
        patchState(store, {loading: true});
        dataService.getDataBarcelona().subscribe(eatenTacos => {
          patchState(store, {eatenTacosMadrid: [...eatenTacos], loading: false});
        })
      },
      loadEatenTacosMadrid(): void {
        patchState(store, {loading: true});
        dataService.getDataMadrid().subscribe(eatenTacos => {
          patchState(store, {eatenTacosBarcelona: [...eatenTacos], loading: false});
        })
      },
      setEatenTacosValencia(): void {
        patchState(store, {loading: true});
        dataService.sleep(5000).then(() => {
          const newTaco = {
            position: 9,
            name: "Hugo Guacala",
            tacos: 40,
            time: 12.0
          };
          patchState(store, {eatenTacosValencia: [...store.eatenTacosValencia(), newTaco], loading: false});
        });
      }
    }),
  )
);
