import { Superhero } from './superhero.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { of } from 'rxjs';

import * as uuid from 'uuid/v1';

const BASE_URL = 'https://superheroapi.com/api/10158035882144431d/'

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {
model = 'powerstats';

  constructor(private httpClient: HttpClient) { }

  getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  getUrlForId(id) {
    return `${this.getUrl()}/${id}`;
  }

  findOne(superhero: Superhero) {
    return this.httpClient.get(this.getUrlForId(superhero));
  }

  all() {
    return this.httpClient.get(this.getUrl());
  }

  create(superhero: Superhero) {
    return of(({ id: uuid(), ...superhero}));
  }

  delete(superhero: Superhero) {
    return this.httpClient.delete(this.getUrlForId(superhero.id));
  }

  update(superhero: Superhero) {
    return this.httpClient.put(this.getUrlForId(superhero.id), superhero);
  }
}
