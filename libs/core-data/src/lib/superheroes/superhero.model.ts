export interface Superhero {
  id: number,
  name: string,
  intelligence: string,
  strength: string,
  speed: string,
}

export const emptySuperhero: Superhero = {
  id: null,
  name: '',
  intelligence: '',
  strength: '',
  speed: ''
}

export interface User {
id: null;
email: string;
password: string;
}
