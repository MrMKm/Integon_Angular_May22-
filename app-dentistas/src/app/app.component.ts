import { SortPipe } from './sort.pipe';
import { Person } from './person';
import { PermissionDirective } from './permission.directive';
import { Component } from '@angular/core';


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
          <td>{{persona.ID}}</td>
          <td>{{persona.nombre}}</td>
          <td>{{persona.apellido}}</td>
          <td>{{persona.ciudad}}</td>
          <td>{{persona.moneda | currency}}</td>
        </tr>
      </tbody>
    </table>

    <p appCopyright></p>

    <input type="text" appNumeric/>

    <div *appPermission="['admin', 'agent']">
      <p>Only for Admins and Agents</p>
    </div>

    <app-demo-utilerias></app-demo-utilerias>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class ComponentOne {
  title = 'app-dentistas';
  public developer = 'Ricardo Orozco';
  public version = 'v1';
  public year = '2022'; 

  personas: Person[] = [
    { ID: 1, nombre: 'Ricardo', apellido: 'Orozco', ciudad: 'Guadalajara', moneda: 1000},
    { ID: 2, nombre: 'Jair', apellido: 'Alvarez', ciudad: 'Zapopan', moneda: 2000},
    { ID: 3, nombre: 'Orozco', apellido: 'Ruiz', ciudad: 'Tijuana', moneda: 2000},
    { ID: 4, nombre: 'Alvarez', apellido: 'Alarcon', ciudad: 'Sahuayo', moneda: 2000}
    ];

  onClick() {
    window.alert(`Button pressed`);
  }
}
