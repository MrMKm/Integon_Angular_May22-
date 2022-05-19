import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoUtileriasComponent } from './demo-utilerias/demo-utilerias.component';



@NgModule({
  declarations: [DemoUtileriasComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DemoUtileriasComponent
  ],
  providers: [

  ],
  bootstrap: []
})
export class UtileriasModule { }
