import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificarCargaPageRoutingModule } from './verificar-carga-routing.module';

import { VerificarCargaPage } from './verificar-carga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificarCargaPageRoutingModule
  ],
  declarations: [VerificarCargaPage]
})
export class VerificarCargaPageModule {}
