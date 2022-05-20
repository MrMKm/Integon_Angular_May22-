import { ReportesComponent } from './reportes/reportes.component';
import { FacturasComponent } from './facturas/facturas.component';
import { ClientesComponent } from './clientes/clientes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'clientes', component: ClientesComponent},
  {path: 'facturas', component: FacturasComponent},
  {path: 'reportes', component: ReportesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
