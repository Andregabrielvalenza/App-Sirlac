import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoAgregarSaborPage } from './pedido-agregar-sabor.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoAgregarSaborPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoAgregarSaborPageRoutingModule {}
