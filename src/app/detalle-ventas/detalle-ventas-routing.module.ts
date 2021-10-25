import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleVentasPage } from './detalle-ventas.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleVentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleVentasPageRoutingModule {}
