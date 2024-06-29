import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  personajes: Personaje[] = [
    {
      name: 'Flash',
      power: 500
    },
    {
      name: 'Spiderman',
      power: 1000
    },
    {
      name: 'Batman',
      power: 700
    }
  ];

  constructor() { }


  getPersonajes(): Personaje[] {
    return this.personajes;
  }

  savePersonaje( personaje: Personaje): void{
    this.personajes.push( personaje );
  }

}
