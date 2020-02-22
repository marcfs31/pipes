import { Component } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Capitán América';
  nombre2: string = 'MARc FoRS';
  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  personajes: string[] = ['Marc', 'Juan', 'Jose', 'Bob', 'Tim'];
  pi: number = Math.PI;
  porcentage: number = 0.234;
  salario: number = 1234.50;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: '500',
    calle: 'Street'
  }

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });

  fecha = new Date();
  idioma: string = 'es';
  videoURL: string = 'https://www.youtube.com/embed/hUYqk3ZKAa4';
  activar: boolean = true;
}
