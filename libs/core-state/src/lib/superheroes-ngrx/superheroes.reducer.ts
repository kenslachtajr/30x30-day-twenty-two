import { Action, createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import * as superheroesActions from './superheroes.actions';
import { Superhero } from '@superheroes-ngrx/core-data';

export const SUPERHEROES_FEATURE_KEY = 'superheroes';

export interface SuperheroesState extends EntityState<Superhero> {
  selectedSuperheroId?: string | number;
  isLoading: boolean;
}

export interface SuperheroesPartialState {
  readonly [SUPERHEROES_FEATURE_KEY]: SuperheroesState;
}

export const superheroesAdapter: EntityAdapter<
Superhero> = createEntityAdapter<Superhero>();

export const initialState: SuperheroesState = superheroesAdapter.getInitialState(
  {
    selectedSuperheroId: null,
    isLoading: false
  }
);

const superheroesReducer = createReducer(
  initialState,
  on(
    superheroesActions.superheroSelected,
    (state, { selectedSuperheroId }) =>
      Object.assign({}, state, { selectedSuperheroId })
  ),
  on(superheroesActions.superheroesLoaded, (state, { superheroes }) =>
  superheroesAdapter.setAll(superheroes, { ...state, isLoading: false })
  ),
  on(superheroesActions.superheroCreated, (state, { superhero }) =>
  superheroesAdapter.addOne(superhero, { ...state, isLoading: false })
  ),
  on(superheroesActions.superheroUpdated, (state, { superhero }) =>
  superheroesAdapter.upsertOne(superhero, { ...state, isLoading: false })
  ),
  on(superheroesActions.superheroDeleted, (state, { superhero }) =>
  superheroesAdapter.removeOne(superhero.id, {
      ...state,
      isLoading: false
    })
  ),
  on(
    superheroesActions.loadSuperheroes,
    superheroesActions.createSuperhero,
    superheroesActions.updateSuperhero,
    superheroesActions.deleteSuperhero,
    state => ({
      ...state,
      isLoading: true
    })
  )
);

export function reducer(state: SuperheroesState | undefined, action: Action) {
  return superheroesReducer(state, action);
}
