import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.sass']
})
export class MatematicoComponent implements OnInit {
  @Input() x:number = 0;
  @Input() y:number = 0;
  @Input() operacion:string = "";

  @Output() calculate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    const numeroX = changes['x'];
    const numeroY = changes['y'];

    const oldValueX = numeroX.previousValue;
    const newValueX = numeroX.currentValue;

    const oldValueY = numeroY.previousValue;
    const newValueY = numeroY.currentValue;

    if(newValueX < 0)
        this.x = 0;

    if(newValueY < 0)
      this.y = 0;
  }

  suma():number {
    return this.x + this.y;
  }

  resta():number {
    return this.x - this.y;
  }

  multiplicacion():number {
    return this.x * this.y;
  }

  division():number {
    return this.x / this.y;
  }

  calcular():number {
    if(this.operacion === "+")
      return this.suma();

    else if(this.operacion === "-")
      return this.resta();

    else if(this.operacion === "*")
      return this.multiplicacion();

    else if(this.operacion === "/")
      return this.division();
  }
}
