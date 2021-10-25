import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditAgregarClientePage } from './edit-agregar-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: EditAgregarClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAgregarClientePageRoutingModule {}
