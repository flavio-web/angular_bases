import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { PersonajeService } from '../services/personaje.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  personajesPadre: Personaje[] = [];

  constructor(
    private personajeService: PersonajeService
  ){}

  ngOnInit(){
    this.getListadoPersonajes();
  }

  getListadoPersonajes(){
    this.personajesPadre = [ ...this.personajeService.getPersonajes() ];
  }

  addPersonaje( personaje: Personaje ){
    console.log('addPersonaje', personaje );

    this.personajeService.savePersonaje( personaje );
    this.getListadoPersonajes();
  }

}
