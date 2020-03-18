import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'superheroes-ngrx-wildcard',
  templateUrl: './wildcard.component.html',
  styleUrls: ['./wildcard.component.scss']
})
export class WildcardComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {}

  redirectToSuperheroes() {
    this.router.navigate(['./superheroes']);
  }
}
