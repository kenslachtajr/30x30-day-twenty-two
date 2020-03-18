import { Superhero } from '@superheroes-ngrx/core-data';
import { Component, Output, Input, EventEmitter } from '@angular/core';
@Component({
  selector: 'superheroes-ngrx-superheroes-details',
  templateUrl: './superheroes-details.component.html',
  styleUrls: ['./superheroes-details.component.scss']
})
export class SuperheroesDetailsComponent {
  currentSuperhero: Superhero;
  originalTitle;
  @Input() set superhero(value) {
    if (value) this.originalTitle = value.name;
    this.currentSuperhero = Object.assign({}, value);
  }
  @Input() form;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
