import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifyService, Superhero, emptySuperhero } from '@superheroes-ngrx/core-data';
import { SuperheroesFacade } from '@superheroes-ngrx/core-state';
import { Observable } from 'rxjs';
@Component({
  selector: 'superheroes-ngrx',
  templateUrl: './superheroes.component.html',
  styleUrls: ['./superheroes.component.scss']
})
export class SuperheroesComponent implements OnInit {
  form: FormGroup;
  selectedSuperhero$: Observable<Superhero> = this.superheroesFacade.selectedSuperhero$;
  superheroes$: Observable<Superhero[]> = this.superheroesFacade.allSuperheroes$;

  constructor(
    private superheroesFacade: SuperheroesFacade,
    private formbuilder: FormBuilder,
    private notify: NotifyService
  ) {}

  ngOnInit() {
    this.initForm();
    this.superheroesFacade.loadSuperheroes();
    this.superheroesFacade.mutations$.subscribe(() => this.resetSuperhero());
  }

  selectSuperhero(superhero: Superhero) {
    this.superheroesFacade.selectSuperhero(superhero.id);
    this.form.patchValue(superhero);
  }

  resetSuperhero() {
    this.form.reset();
    this.selectSuperhero(emptySuperhero);
    Object.keys(this.form.controls).forEach(key => {
      this.form.get(key).setErrors(null);
    });
  }

  createSuperhero() {
    this.notify.notification(`You have created ${this.form.value.name}`);
    this.superheroesFacade.createSuperhero(this.form.value);
  }

  cancel() {
    this.resetSuperhero();
    this.form.reset();
  }

  saveSuperhero(superhero: Superhero) {
    if (superhero.id) {
      this.updateSuperhero();
    } else {
      this.createSuperhero();
    }
  }

  updateSuperhero() {
    this.notify.notification(`You have updated ${this.form.value.name}`);
    this.superheroesFacade.updateSuperhero(this.form.value);
  }

  deleteSuperhero(superhero: Superhero) {
    this.notify.notification(`You have deleted ${superhero.name}`);
    this.superheroesFacade.deleteSuperhero(superhero);
  }

  private initForm() {
    this.form = this.formbuilder.group({
      id: null,
      name: ['', Validators.compose([Validators.required])],
      intelligence: ['', Validators.compose([Validators.required])],
      strength: ['', Validators.compose([Validators.required])],
      speed: ['', Validators.compose([Validators.required])],
    });
  }
}
