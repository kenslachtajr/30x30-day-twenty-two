import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesDetailsComponent } from './superheroes-details.component';

describe('SuperheroesDetailsComponent', () => {
  let component: SuperheroesDetailsComponent;
  let fixture: ComponentFixture<SuperheroesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
