import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.sass']
})
export class InfoPersonaComponent implements OnInit, OnDestroy {
  @Input() nombre:string = "";
  @Input() apellido:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      
  }
}
