import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthTokenInterceptorService } from '@superheroes-ngrx/core-data';

import { CoreDataModule } from '@superheroes-ngrx/core-data';
import { CoreStateModule } from '@superheroes-ngrx/core-state';
import { MaterialModule } from '@superheroes-ngrx/material';
import { UiLibrariesModule } from '@superheroes-ngrx/ui-libraries';

import { RoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { SuperheroesItemComponent } from './superheroes/superheroes-item/superheroes-item.component';
import { SuperheroesDetailsComponent } from './superheroes/superheroes-details/superheroes-details.component';
import { SuperheroesListComponent } from './superheroes/superheroes-list/superheroes-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    SuperheroesComponent,
    SuperheroesItemComponent,
    SuperheroesDetailsComponent,
    SuperheroesListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreDataModule,
    CoreStateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UiLibrariesModule,
    RoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
