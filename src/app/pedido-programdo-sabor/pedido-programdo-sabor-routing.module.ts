import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoProgramdoSaborPage } from './pedido-programdo-sabor.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoProgramdoSaborPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoProgramdoSaborPageRoutingModule {}
