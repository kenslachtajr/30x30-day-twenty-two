import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroesItemComponent } from './superheroes-item.component';

describe('SuperheroesItemComponent', () => {
  let component: SuperheroesItemComponent;
  let fixture: ComponentFixture<SuperheroesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperheroesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperheroesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
