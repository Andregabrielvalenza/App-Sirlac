import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalfacuracionPage } from './modalfacuracion.page';

const routes: Routes = [
  {
    path: '',
    component: ModalfacuracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalfacuracionPageRoutingModule {}
