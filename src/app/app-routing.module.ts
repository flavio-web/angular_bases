import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './personajes/home/home.component';
import { ContadorComponent } from './bases/contador/contador.component';
import { HeroesComponent } from './bases/heroes/heroes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contador',
    component: ContadorComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: '**',
    redirectTo: 'contador',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
