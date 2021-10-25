import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePedidoProgramadoPageRoutingModule } from './detalle-pedido-programado-routing.module';

import { DetallePedidoProgramadoPage } from './detalle-pedido-programado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePedidoProgramadoPageRoutingModule
  ],
  declarations: [DetallePedidoProgramadoPage]
})
export class DetallePedidoProgramadoPageModule {}
