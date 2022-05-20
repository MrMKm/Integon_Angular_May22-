import { Vuelos } from './aerolinea/vuelos/vuelos.vuelo';
import { PersonasService } from './personas.service';
import { SortPipe } from './shared/sort.pipe';
import { PermissionDirective } from './shared/permission.directive';
import { Component, OnInit} from '@angular/core';
import { Person } from './person';


@Component({
  selector: 'app-root',
  template: `
    <app-counter></app-counter>
    <app-info-persona [nombre]="'Ricardo Jair'" [apellido]="'Orozco Alvarez'"></app-info-persona>
    <app-matematico [x]="10" [y]="10" [operacion]="'*'" (calculate)="onClick()"></app-matematico>

    <table>
      <thead>
        <th>Index</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Ciudad</th>
        <th>Moneda</th>
      </thead>
      <tbody>
        <tr *ngFor="let persona of personas | sort:'ciudad':false">
          <td>{{persona.id}}</td>
          <td>{{persona.nombre}}</td>
          <td>{{persona.apellido}}</td>
          <td>{{persona.ciudad}}</td>
          <td>{{persona.moneda | currency}}</td>
        </tr>
      </tbody>
    </table>

    Dato: <input type="text" id="txtDato" [(ngModel)]="dato"/>
    {{dato}}

    <p appCopyright></p>

    <input type="text" appNumeric/>

    <div *appPermission="['admin', 'agent']">
      <p>Only for Admins and Agents</p>
    </div>

    <app-demo-utilerias></app-demo-utilerias>

    <app-vuelos></app-vuelos>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [PersonasService]
})
export class ComponentOne implements OnInit {
  title = 'app-dentistas';
  public developer = 'Ricardo Orozco';
  public version = 'v1';
  public year = '2022'; 
  public personas:Person[] = [];
  public dato:string = "";

  // personas: Person[] = [
  //   { ID: 1, nombre: 'Ricardo', apellido: 'Orozco', ciudad: 'Guadalajara', moneda: 1000},
  //   { ID: 2, nombre: 'Jair', apellido: 'Alvarez', ciudad: 'Zapopan', moneda: 2000},
  //   { ID: 3, nombre: 'Orozco', apellido: 'Ruiz', ciudad: 'Tijuana', moneda: 2000},
  //   { ID: 4, nombre: 'Alvarez', apellido: 'Alarcon', ciudad: 'Sahuayo', moneda: 2000}
  //   ];

  constructor(private personasService:PersonasService) {}

  ngOnInit(){
    //this.personas = this.personasService.getPersonas();

    // this.personasService.getPersonas().subscribe({
    //   next: data => {
    //     this.personas = data.personas;
    //   }
    // });

    this.personasService.getPersonas().subscribe(data => {
      this.personas = data;
    });
  }

  onClick() {
    window.alert(`Button pressed`);
  }
}
