import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiosExitosoPage } from './cambios-exitoso.page';

const routes: Routes = [
  {
    path: '',
    component: CambiosExitosoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiosExitosoPageRoutingModule {}
