import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <span>Counter: {{counter}}</span>
    <div>
        <button (click)="incrementCounter()">+</button>
        <button (click)="decrementCounter()">-</button>
    </div>
  `,
})
export class Counter {
    public counter:number;

    constructor() {
        this.counter = 0;
    }

    incrementCounter() {
        this.counter += 1;
    }

    decrementCounter() {
        this.counter -= 1;

        if(this.counter < 0)
            this.counter = 0;
    }

    ngOnInit():void {}
}