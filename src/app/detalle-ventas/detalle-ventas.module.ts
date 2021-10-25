import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleVentasPageRoutingModule } from './detalle-ventas-routing.module';

import { DetalleVentasPage } from './detalle-ventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleVentasPageRoutingModule
  ],
  declarations: [DetalleVentasPage]
})
export class DetalleVentasPageModule {}
