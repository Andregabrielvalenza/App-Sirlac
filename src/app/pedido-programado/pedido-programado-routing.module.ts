import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoProgramadoPage } from './pedido-programado.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoProgramadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoProgramadoPageRoutingModule {}
