import { VueloService } from './services/vuelo.service';
import { Component, OnInit } from '@angular/core';
import { Vuelos } from './vuelos.vuelo';

@Component({
  selector: 'app-vuelos',
  //templateUrl: './vuelos.component.html',
  template: `
    <table>
      <thead>
        <th>No. Vuelo</th>
        <th>Fecha</th>
        <th>Horario</th>
        <th>Origen</th>
        <th>Destino</th>
      </thead>
      <tbody>
        <tr *ngFor="let vuelo of vuelos">
          <td>{{vuelo.numeroVuelo}}</td>
          <td>{{vuelo.fecha}}</td>
          <td>{{vuelo.horario}}</td>
          <td>{{vuelo.origen}}</td>
          <td>{{vuelo.destino}}</td>
        </tr>
      </tbody>
    </table>

    <form>
      <div class="form-group">
          <div class="mb-3">
              <label>Numero Vuelo</label>
              <input type="number" min="{{vuelos.length + 1}}" class="form-control" [(ngModel)]="noVuelo" name="noVuelo"/>
          </div>

          <div class="mb-3">
              <label>Fecha</label>
              <input class="form-control" [(ngModel)]="fecha" name="fecha"/>
          </div>

          <div class="mb-3">
              <label>Horario</label>
              <input class="form-control" [(ngModel)]="horario" name="horario"/>
          </div>

          <div class="mb-3">
              <label>Origen</label>
              <input class="form-control" [(ngModel)]="origen" name="origen"/>
          </div>

          <div class="mb-3">
              <label>Destino</label>
              <input class="form-control" [(ngModel)]="destino" name="destino"/>
          </div>

          <div class="mb-3">
              <button (click)="setVuelo()" type="submit" class="btn btn-primary" >Agregar Vuelo</button>
          </div>
      </div>
    </form>

  `,
  styleUrls: ['./vuelos.component.sass'],
  providers: [VueloService]
})
export class VuelosComponent implements OnInit {
  public vuelos:Vuelos[] = [];
  public vuelo:Vuelos;

  public noVuelo:number;
  public fecha:string;
  public horario:string;
  public origen:string;
  public destino:string;

  constructor(private vueloService:VueloService) { }

  ngOnInit(){
    this.vuelos = this.vueloService.getVuelos();
  }

  setVuelo() {
    this.vuelo = { 
      numeroVuelo: this.noVuelo, 
      fecha: this.fecha, 
      horario: this.horario, 
      origen: this.origen, 
      destino: this.destino
    };

    this.vuelos = this.vueloService.setVuelo(this.vuelo);
  }

}
