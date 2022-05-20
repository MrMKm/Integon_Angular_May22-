import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VuelosComponent } from './vuelos/vuelos.component';

@NgModule({
  declarations: [
    VuelosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    VuelosComponent
  ]
})
export class AerolineaModule { }
