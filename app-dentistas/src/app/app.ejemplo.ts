import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  template: `
    <span>Developed by {{developer}} in {{year}}</span>
  `,
})
export class Ejemplo {
  public developer = 'Ricardo Orozco';
  public version = 'v1';
  public year = '2022';
}