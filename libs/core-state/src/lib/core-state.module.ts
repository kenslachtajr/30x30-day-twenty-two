import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPersistence } from '@nrwl/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';
import { CoreDataModule } from '@superheroes-ngrx/core-data';
import { reducers } from '.';

import { SuperheroesEffects } from './superheroes-ngrx/superheroes.effects';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([SuperheroesEffects]),
    StoreDevtoolsModule.instrument({ name: 'NGRX Sample Store' })
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
