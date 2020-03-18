import {NgModule} from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { SuperheroesItemComponent } from './superheroes/superheroes-item/superheroes-item.component';
import { LoginComponent } from '@superheroes-ngrx/ui-libraries';
import { WildcardComponent } from '@superheroes-ngrx/ui-libraries';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wild', component: WildcardComponent },
  { path: 'superheroes', component: SuperheroesComponent },
  { path: 'superheroes/:id', component: SuperheroesItemComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'wild', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
