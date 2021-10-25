import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePedidoProgramadoPage } from './detalle-pedido-programado.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePedidoProgramadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePedidoProgramadoPageRoutingModule {}
