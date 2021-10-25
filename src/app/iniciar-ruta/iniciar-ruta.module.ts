import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IniciarRutaPageRoutingModule } from './iniciar-ruta-routing.module';

import { IniciarRutaPage } from './iniciar-ruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IniciarRutaPageRoutingModule
  ],
  declarations: [IniciarRutaPage]
})
export class IniciarRutaPageModule {}
