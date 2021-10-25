import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoExitosoPage } from './pedido-exitoso.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoExitosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoExitosoPageRoutingModule {}
