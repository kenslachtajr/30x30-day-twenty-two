import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  SUPERHEROES_FEATURE_KEY,
  superheroesAdapter,
  SuperheroesPartialState,
  SuperheroesState
} from './superheroes.reducer';

export const selectSuperheroesState = createFeatureSelector<
  SuperheroesPartialState,
  SuperheroesState
>(SUPERHEROES_FEATURE_KEY);

const { selectAll, selectEntities } = superheroesAdapter.getSelectors();

export const selectSuperheroesLoading = createSelector(
  selectSuperheroesState,
  (state: SuperheroesState) => selectAll(state)
);

export const selectAllSuperheroes = createSelector(
  selectSuperheroesState,
  (state: SuperheroesState) => selectAll(state)
);

export const selectSuperheroesEntities = createSelector(
  selectSuperheroesState,
  (state: SuperheroesState) => selectEntities(state)
);

export const selectSuperheroId = createSelector(
  selectSuperheroesState,
  (state: SuperheroesState) => state.selectedSuperheroId
);

export const selectSuperhero = createSelector(
  selectSuperheroesEntities,
  selectSuperheroId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
