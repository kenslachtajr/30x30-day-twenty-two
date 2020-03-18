import { ActionReducerMap } from '@ngrx/store';
import * as fromSuperheroes from './superheroes-ngrx/superheroes.reducer';

export interface AppState {
  superheroes: fromSuperheroes.SuperheroesState;
}

export const reducers: ActionReducerMap<AppState> = {
  superheroes: fromSuperheroes.reducer
};

export const defaultState: AppState = {
  superheroes: { ids: [] } as fromSuperheroes.SuperheroesState
};
