import { HttpClientModule } from '@angular/common/http';
import { AerolineaModule } from './aerolinea/aerolinea.module';
import { SharedModule } from './shared/shared.module';
import { UtileriasModule } from './utilerias/utilerias.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    UtileriasModule,
    SharedModule,
    FormsModule,
    AerolineaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ComponentOne]
})
export class AppModule { }
