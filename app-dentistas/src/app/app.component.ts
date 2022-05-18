import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-counter></app-counter>
    <app-info-persona [nombre]="'Ricardo Jair'" [apellido]="'Orozco Alvarez'"></app-info-persona>
    <app-matematico [x]="10" [y]="10" [operacion]="'*'" (calculate)="onClick()"></app-matematico>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class ComponentOne {
  title = 'app-dentistas';
  public developer = 'Ricardo Orozco';
  public version = 'v1';
  public year = '2022';

  onClick() {
    window.alert(`Button pressed`);
  }
}
