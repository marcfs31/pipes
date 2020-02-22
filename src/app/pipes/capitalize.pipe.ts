import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {
    value = value.toLocaleLowerCase();
    let nombres = value.split(' ');

    if (todas) {
      nombres = nombres.map( nombre => {
        return (nombre[0].toLocaleUpperCase() + nombre.substr(1));
      });
    } else {
      nombres[0] = nombres[0][0].toLocaleUpperCase() + nombres[0].substr(1);
    }
    return nombres.join(' ');
  }
}
