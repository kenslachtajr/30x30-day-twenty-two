import { Component } from '@angular/core';
import { AuthService } from '@superheroes-ngrx/core-data';

@Component({
  selector: 'superheroes-ngrx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Superheroes MDV';

  links = [
    { path: '/superheroes', icon: 'work', title: 'Superheroes'}
  ]

  userIsAuthenticated$ = this.authService.isAuthenticated$;
  constructor(private authService: AuthService) {}
}
