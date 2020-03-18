import { createAction, props } from '@ngrx/store';
import { Superhero } from '@superheroes-ngrx/core-data';

export const superheroSelected = createAction(
  '[SUPERHERO] Superhero Selected',
  props<{ selectedSuperheroId: string | number }>()
);

export const loadSuperheroes = createAction('[SUPERHERO] Load Superheroes');

export const superheroesLoaded = createAction(
  '[SUPERHERO] Superhero Loaded',
  props<{ superheroes: Superhero[] }>()
);

export const loadSuperhero = createAction(
  '[SUPERHERO] Load Superhero',
  props<{ superhero: Superhero }>()
);

export const superheroLoaded = createAction(
  '[SUPERHERO] Superhero Loaded',
  props<{ superhero: Superhero }>()
);

export const createSuperhero = createAction(
  '[SUPERHERO] Create Superhero',
  props<{ superhero: Superhero }>()
);

export const superheroCreated = createAction(
  '[SUPERHERO] Superhero Created',
  props<{ superhero: Superhero }>()
);

export const updateSuperhero = createAction(
  '[SUPERHERO] Update Superhero',
  props<{ superhero: Superhero }>()
);

export const superheroUpdated = createAction(
  '[SUPERHERO] Superhero Updated',
  props<{ superhero: Superhero }>()
);

export const deleteSuperhero = createAction(
  '[SUPERHERO] Delete Superhero',
  props<{ superhero: Superhero }>()
);

export const superheroDeleted = createAction(
  '[SUPERHERO] Superhero Deleted',
  props<{ superhero: Superhero }>()
);
