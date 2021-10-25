import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaAsignadaPageRoutingModule } from './carga-asignada-routing.module';

import { CargaAsignadaPage } from './carga-asignada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargaAsignadaPageRoutingModule
  ],
  declarations: [CargaAsignadaPage]
})
export class CargaAsignadaPageModule {}
