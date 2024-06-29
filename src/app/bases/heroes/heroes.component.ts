import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {

  heroes: string[] = ['Batman', 'Spiderman', 'Capitan America', 'Hulk', 'Chapulin Colorado', 'Flash' ];
  ultimoHeroeEliminado?: string;

  eliminarUltimoHeroe(){
    this.ultimoHeroeEliminado = this.heroes.pop();
  }

}
