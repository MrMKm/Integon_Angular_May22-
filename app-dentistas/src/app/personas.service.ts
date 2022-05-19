import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor() { }

  getPersonas() {
    let personas:Person[] = [
      { ID: 1, nombre: 'Ricardo', apellido: 'Orozco', ciudad: 'Guadalajara', moneda: 1000},
      { ID: 2, nombre: 'Jair', apellido: 'Alvarez', ciudad: 'Zapopan', moneda: 2000},
      { ID: 3, nombre: 'Orozco', apellido: 'Ruiz', ciudad: 'Tijuana', moneda: 2000},
      { ID: 4, nombre: 'Alvarez', apellido: 'Alarcon', ciudad: 'Sahuayo', moneda: 2000}
      ];

    return personas;
  }
}
