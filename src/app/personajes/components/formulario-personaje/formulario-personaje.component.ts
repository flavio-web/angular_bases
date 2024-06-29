import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-formulario-personaje',
  templateUrl: './formulario-personaje.component.html',
  styleUrl: './formulario-personaje.component.css'
})
export class FormularioPersonajeComponent {

  @Output() onNewPersonaje: EventEmitter<Personaje> = new EventEmitter();

  personajeForm: Personaje = {
    name: '',
    power: 0
  }


  registrarPersonaje(){
    const nuevoPersonaje = { ...this.personajeForm };
    console.log(nuevoPersonaje);

    if( nuevoPersonaje.name.length === 0 ) return;

    this.onNewPersonaje.emit( nuevoPersonaje );

    this.personajeForm.name   = '';
    this.personajeForm.power  = 0;

  }

}
