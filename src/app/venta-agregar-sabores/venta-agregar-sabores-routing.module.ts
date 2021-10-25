import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaAgregarSaboresPage } from './venta-agregar-sabores.page';

const routes: Routes = [
  {
    path: '',
    component: VentaAgregarSaboresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaAgregarSaboresPageRoutingModule {}
