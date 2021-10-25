import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificarCargaPage } from './verificar-carga.page';

const routes: Routes = [
  {
    path: '',
    component: VerificarCargaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificarCargaPageRoutingModule {}
