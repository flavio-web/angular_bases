import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-listar-personaje',
  templateUrl: './listar-personaje.component.html',
  styleUrl: './listar-personaje.component.css'
})
export class ListarPersonajeComponent {


  @Input() personajes: Personaje[] = [];

}
