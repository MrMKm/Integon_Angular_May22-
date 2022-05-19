import { Injectable } from '@angular/core';
import { Vuelos } from '../vuelos.vuelo';

@Injectable({
  providedIn: 'root'
})
export class VueloService {
  public vuelos:Vuelos[] = [];

  constructor() { }

  getVuelos() {
     this.vuelos = [
      { numeroVuelo: 1, fecha: "19/05/22", horario: "20:00", origen: "Guadalajara", destino: "Monterrey"},
      { numeroVuelo: 2, fecha: "20/05/22", horario: "20:00", origen: "Tijuana", destino: "Monterrey"},
      { numeroVuelo: 3, fecha: "21/05/22", horario: "20:00", origen: "Monterrey", destino: "Estados Unidos"}
      ];

    return this.vuelos;
  }

  setVuelo(vuelo:Vuelos) {
    this.vuelos.push(vuelo);
    return this.vuelos;
  }
}
