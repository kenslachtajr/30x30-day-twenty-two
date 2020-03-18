import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as superheroesActions from './superheroes.actions';
import { SuperheroesFacade } from './superheroes.facade';
import { Superhero, SuperheroesService, NotifyService } from '@superheroes-ngrx/core-data';
import { SuperheroesPartialState } from './superheroes.reducer';

@Injectable()
export class SuperheroesEffects {
  loadSuperheroes$ = createEffect(() =>
    this.dataPersistence.fetch(superheroesActions.loadSuperheroes, {
      run: (
        action: ReturnType<typeof superheroesActions.loadSuperheroes>,
        state: SuperheroesPartialState
      ) => {
        return this.superheroesService
          .all()
          .pipe(
            map((superheroes: Superhero[]) => superheroesActions.superheroesLoaded({ superheroes }))
          );
      },
      onError: (action: ReturnType<typeof superheroesActions.loadSuperheroes>, error) => {
        this.notify.notification('Effect Load All Error', error);
      }
    })
  );

  loadSuperheroe$ = createEffect(() =>
    this.dataPersistence.fetch(superheroesActions.loadSuperhero, {
      run: (
        action: ReturnType<typeof superheroesActions.loadSuperhero>,
        state: SuperheroesPartialState
      ) => {
        return this.superheroesService
          .findOne(action.superhero)
          .pipe(map((superhero: Superhero) => superheroesActions.superheroLoaded({ superhero })));
      },
      onError: (action: ReturnType<typeof superheroesActions.loadSuperhero>, error) => {
        this.notify.notification('Effect Load Error', error);
      }
    })
  );

  selectSuperheroOnLoad$ = createEffect(() =>
    this.dataPersistence.actions.pipe(
      ofType(superheroesActions.superheroLoaded),
      map(({ superhero }) =>
        superheroesActions.superheroSelected({
          selectedSuperheroId: superhero.id
        })
      )
    )
  );

  createSuperhero$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(superheroesActions.createSuperhero, {
      run: (
        action: ReturnType<typeof superheroesActions.createSuperhero>,
        state: SuperheroesPartialState
      ) => {
        return this.superheroesService
          .create(action.superhero)
          .pipe(map((superhero: Superhero) => superheroesActions.superheroCreated({ superhero })));
      },
      onError: (
        action: ReturnType<typeof superheroesActions.createSuperhero>,
        error
      ) => {
        this.notify.notification('Effect Create Error', error);
      }
    })
  );

  updateSuperhero$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(superheroesActions.updateSuperhero, {
      run: (
        action: ReturnType<typeof superheroesActions.updateSuperhero>,
        state: SuperheroesPartialState
      ) => {
        return of(action.superhero).pipe(
          map((superhero: Superhero) => superheroesActions.superheroUpdated({ superhero })),
          tap(() => this.notify.notification('Successfully updated a superhero'))
        );
      },
      onError: (
        action: ReturnType<typeof superheroesActions.updateSuperhero>,
        error
      ) => {
        this.notify.notification('Effect Update Error', error);
      }
    })
  );

  deleteSuperheroe$ = createEffect(() =>
    this.dataPersistence.pessimisticUpdate(superheroesActions.deleteSuperhero, {
      run: (
        action: ReturnType<typeof superheroesActions.deleteSuperhero>,
        state: SuperheroesPartialState
      ) => {
        return of(action.superhero).pipe(
          map((superhero: Superhero) => superheroesActions.superheroDeleted({ superhero })),
          tap(() => this.notify.notification('Successfully deleted a superhero'))
        );
      },
      onError: (
        action: ReturnType<typeof superheroesActions.deleteSuperhero>,
        error
      ) => {
        this.notify.notification('Effect Delete Error', error);
      }
    })
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<SuperheroesPartialState>,
    private superheroesService: SuperheroesService,
    private superheroesFacade: SuperheroesFacade,
    private notify: NotifyService
  ) {}
}
