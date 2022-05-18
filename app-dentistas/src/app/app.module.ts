import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentOne } from './app.component';
import { Ejemplo } from './app.ejemplo';
import { Counter } from './app.counter';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { MatematicoComponent } from './matematico/matematico.component';

@NgModule({
  declarations: [
    ComponentOne,
    Ejemplo,
    Counter,
    InfoPersonaComponent,
    MatematicoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ComponentOne]
})
export class AppModule { }
