import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormularioPersonajeComponent } from './components/formulario-personaje/formulario-personaje.component';
import { ListarPersonajeComponent } from './components/listar-personaje/listar-personaje.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    FormularioPersonajeComponent,
    ListarPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    FormularioPersonajeComponent
  ]
})
export class PersonajesModule { }
