import { Component } from '@angular/core';
import { PERFIL, PROYECTOS } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly perfil = PERFIL;
  protected readonly proyectos = PROYECTOS;
  protected readonly anio = new Date().getFullYear();
}
