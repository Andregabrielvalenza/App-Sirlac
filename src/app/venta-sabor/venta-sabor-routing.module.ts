import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaSaborPage } from './venta-sabor.page';

const routes: Routes = [
  {
    path: '',
    component: VentaSaborPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaSaborPageRoutingModule {}
