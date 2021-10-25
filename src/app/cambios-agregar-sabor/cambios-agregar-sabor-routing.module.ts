import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiosAgregarSaborPage } from './cambios-agregar-sabor.page';

const routes: Routes = [
  {
    path: '',
    component: CambiosAgregarSaborPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiosAgregarSaborPageRoutingModule {}
