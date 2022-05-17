import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class ComponentOne {
  title = 'app-dentistas';
  public developer = 'Ricardo Orozco';
  public version = 'v1';
  public year = '2022';
}
