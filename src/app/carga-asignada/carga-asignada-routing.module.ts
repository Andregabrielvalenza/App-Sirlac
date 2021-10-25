import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaAsignadaPage } from './carga-asignada.page';

const routes: Routes = [
  {
    path: '',
    component: CargaAsignadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaAsignadaPageRoutingModule {}
