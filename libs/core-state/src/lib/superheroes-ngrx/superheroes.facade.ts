import { Injectable } from '@angular/core';
import { Action, select, Store, ActionsSubject } from '@ngrx/store';
import { filter } from 'rxjs/operators';

import * as fromSuperheroes from './superheroes.reducer';
import * as superheroesActions from './superheroes.actions';
import * as superheroesSelectors from './superheroes.selector';
import { Superhero } from '@superheroes-ngrx/core-data';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesFacade {
  allSuperheroes$ = this.store.pipe(select(superheroesSelectors.selectAllSuperheroes));
  selectedSuperhero$ = this.store.pipe(select(superheroesSelectors.selectSuperhero));
  superheroesLoading$ = this.store.pipe(select(superheroesSelectors.selectSuperheroesLoading));
  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === superheroesActions.createSuperhero({} as any).type ||
        action.type === superheroesActions.updateSuperhero({} as any).type ||
        action.type === superheroesActions.deleteSuperhero({} as any).type
    )
  );

  constructor(
    private actions$: ActionsSubject,
    private store: Store<fromSuperheroes.SuperheroesPartialState>
  ) {}

  selectSuperhero(selectedSuperheroId: string | number) {
    this.dispatch(superheroesActions.superheroSelected({ selectedSuperheroId }));
  }

  loadSuperheroes() {
    this.dispatch(superheroesActions.loadSuperheroes());
  }

  loadSuperhero(superhero: Superhero) {
    this.dispatch(superheroesActions.loadSuperhero({ superhero }));
  }

  createSuperhero(superhero: Superhero) {
    this.dispatch(superheroesActions.createSuperhero({ superhero }));
  }

  updateSuperhero(superhero: Superhero) {
    this.dispatch(superheroesActions.updateSuperhero({ superhero }));
  }

  deleteSuperhero(superhero: Superhero) {
    this.dispatch(superheroesActions.deleteSuperhero({ superhero }));
  }

  private dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
