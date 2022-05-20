import { PersonasService } from './../personas.service';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-info-persona',
  //templateUrl: './info-persona.component.html',
  template: `
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
  `,
  styleUrls: ['./info-persona.component.sass']
})
export class InfoPersonaComponent implements OnInit, OnDestroy {
  @Input() nombre:string = "";
  @Input() apellido:string = "";

  public personas:Person[] = [];

  constructor(private personasService:PersonasService) {}

  ngOnInit(){
    this.personasService.getPersonas().subscribe(data => {
      this.personas = data;
    });
  }

  ngOnDestroy(): void {
      
  }
}
