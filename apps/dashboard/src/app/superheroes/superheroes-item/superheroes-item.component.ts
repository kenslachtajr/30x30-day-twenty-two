import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperheroesService } from '@superheroes-ngrx/core-data';

@Component({
  selector: 'superheroes-ngrx-superheroes-item',
  templateUrl: './superheroes-item.component.html',
  styleUrls: ['./superheroes-item.component.scss']
})
export class SuperheroesItemComponent implements OnInit {
  _superhero$;
  originalTitle;
  public get superhero$() {
    return this._superhero$;
  }
  public set superhero$(value) {
    this._superhero$ = value;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private Superheroeservice: SuperheroesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = param['id'];
      this.superhero$ = this.Superheroeservice.findOne(id);
    });
  }

  goBackToSuperheroes() {
    this.router.navigate(['/superheroes']);
  }
}
