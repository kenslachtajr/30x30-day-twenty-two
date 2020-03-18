import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Superhero } from '@superheroes-ngrx/core-data';

@Component({
  selector: 'superheroes-ngrx-superheroes-list',
  templateUrl: './superheroes-list.component.html',
  styleUrls: ['./superheroes-list.component.scss']
})
export class SuperheroesListComponent {
  @Input() superheroes: Superhero[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
