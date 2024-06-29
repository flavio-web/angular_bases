import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})

export class ContadorComponent {

  valor:number = 20;

  incrementar(){
    this.valor += 1;
  }

  decrementar(){
    this.valor -= 1;
  }

}
