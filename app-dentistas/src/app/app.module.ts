import { UtileriasModule } from './utilerias/utilerias.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentOne } from './app.component';
import { Ejemplo } from './app.ejemplo';
import { Counter } from './app.counter';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { MatematicoComponent } from './matematico/matematico.component';
import { SortPipe } from './sort.pipe';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';
import { PermissionDirective } from './permission.directive';

@NgModule({
  declarations: [
    ComponentOne,
    Ejemplo,
    Counter,
    InfoPersonaComponent,
    MatematicoComponent,
    SortPipe,
    CopyrightDirective,
    NumericDirective,
    PermissionDirective
  ],
  imports: [
    BrowserModule,
    UtileriasModule
  ],
  providers: [],
  bootstrap: [ComponentOne]
})
export class AppModule { }
