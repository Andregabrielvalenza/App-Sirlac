import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IniciarRutaPage } from './iniciar-ruta.page';

const routes: Routes = [
  {
    path: '',
    component: IniciarRutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IniciarRutaPageRoutingModule {}
